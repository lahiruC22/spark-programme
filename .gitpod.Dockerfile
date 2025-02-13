# Use an official OpenJDK runtime as a parent image
FROM openjdk:21-jdk-slim

# Set the working directory
WORKDIR /workspace

# Install Python for serving static files
RUN apt-get update && apt-get install -y python3

# Copy backend and frontend code
COPY task-1-challenge/taskone backend
COPY task-1-challenge/frontend frontend

# Install backend dependencies and build
WORKDIR /workspace/backend
RUN ./mvnw install

# Expose ports
EXPOSE 8080 3000

# Command to run both applications
CMD ["sh", "-c", "java -jar /workspace/backend/target/taskone.jar & python3 -m http.server 3000 --directory /workspace/frontend"]