# Copy frontend build into Spring Boot static resources
rm -r ../src/main/resources/static/*
cp -r dist/demoapp-frontend/ ../src/main/resources/static/
