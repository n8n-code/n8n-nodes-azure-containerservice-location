import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureContainerserviceLocationApi implements ICredentialType {
        name = 'N8nDevAzureContainerserviceLocationApi';

        displayName = 'Azure Containerservice Location API';

        icon: Icon = { light: 'file:../nodes/AzureContainerserviceLocation/azure-containerservice-location.png', dark: 'file:../nodes/AzureContainerserviceLocation/azure-containerservice-location.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Containerservice Location API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
