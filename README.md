# demo-azure-deployment

Demo App with Spring Boot + Angular for Azure deployment.

See this blog post for detailed instructions: https://www.kleemans.ch/deploy-a-spring-boot-angular-app-to-azure

### Steps

Short version:

1. Go into the frontend folder `demoapp-frontend` and build the it: `ng build --prod`
2. Copy the frontend build into the `static`-resources by running `./copy.sh`
3. Create a "Resource Group" and new "App Service" on Azure Portal, and update those parameters in `build.gradle`.
4. Install AzureCLI, and login.
5. Run the Gradle tasks `bootJar` and then `azureWebappDeploy` to deploy the webapp.
