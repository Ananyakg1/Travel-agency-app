# Azure Setup Commands

## Create Service Principal for GitHub Actions

```bash
# Replace these values with your actual values
SUBSCRIPTION_ID="your-subscription-id"
RESOURCE_GROUP="your-resource-group"
ACR_NAME="your-acr-name"
AKS_CLUSTER_NAME="your-aks-cluster"

# Create service principal
az ad sp create-for-rbac \
  --name "travel-agency-github-actions" \
  --role contributor \
  --scopes /subscriptions/$SUBSCRIPTION_ID/resourceGroups/$RESOURCE_GROUP \
  --sdk-auth

# This will output JSON like:
# {
#   "clientId": "your-client-id",
#   "clientSecret": "your-client-secret", 
#   "subscriptionId": "your-subscription-id",
#   "tenantId": "your-tenant-id"
# }
```

## Get ACR Credentials

```bash
# Get ACR login server
az acr show --name $ACR_NAME --query loginServer --output tsv

# Get ACR username (usually same as ACR name)
echo $ACR_NAME

# Get ACR password
az acr credential show --name $ACR_NAME --query passwords[0].value --output tsv
```

## Required GitHub Secrets

Set these secrets in your GitHub repository settings:

1. **AZURE_CREDENTIALS** - The entire JSON output from the service principal creation
2. **REGISTRY_LOGIN_SERVER** - ACR login server URL (e.g., yourregistry.azurecr.io)
3. **REGISTRY_USERNAME** - ACR username
4. **REGISTRY_PASSWORD** - ACR password
5. **AKS_RESOURCE_GROUP** - Resource group name
6. **AKS_CLUSTER_NAME** - AKS cluster name
7. **SNYK_TOKEN** - Your Snyk API token

## Test Azure Login

```bash
# Test if service principal works
az login --service-principal \
  --username "your-client-id" \
  --password "your-client-secret" \
  --tenant "your-tenant-id"

# Test ACR access
az acr login --name $ACR_NAME
```
