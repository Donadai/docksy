# Use the official .NET 6 SDK as the build image
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

WORKDIR /app

# Copy the .csproj and restore any dependencies (you might need to adjust the project file)
COPY *.csproj ./
RUN dotnet restore

# Copy the rest of your application code and build it
COPY . ./
RUN dotnet publish docksy.csproj -c Release -o out

# Use the official ASP.NET runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS runtime

WORKDIR /app

# Copy the published output from the build image
COPY --from=build /app/out .

EXPOSE 80

# Define the command to start your .NET application
ENTRYPOINT ["dotnet", "docksy.dll"]
