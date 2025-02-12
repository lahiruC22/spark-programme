# Use an official OpenJDK runtime as a parent image
FROM openjdk:21-jdk-slim

# Set the working directory
WORKDIR /workspace

# Install Node.js and npm
RUN apt-get update && \
    apt-get install -y curl gnupg && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Copy backend and frontend code
COPY task-1-challenge/taskone backend
COPY task-1-challenge/frontend frontend

# Install backend dependencies and build
WORKDIR /workspace/backend
RUN ./mvnw install

# Install frontend dependencies
WORKDIR /workspace/frontend
RUN npm install

# Expose ports
EXPOSE 8080 3000

# Command to run both applications
CMD ["sh", "-c", "java -jar /workspace/backend/target/your-application.jar & npm start --prefix /workspace/frontend"]
