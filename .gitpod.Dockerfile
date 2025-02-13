# Use an official OpenJDK runtime as a parent image
FROM openjdk:21-jdk-slim

# Set the working directory
WORKDIR /workspace

# Install Python for serving static files (and other utilities if needed)
RUN apt-get update && apt-get install -y git python3

# Copy backend code and build in a separate layer (for caching)
COPY task-1-challenge/taskone /workspace/backend
WORKDIR /workspace/backend
RUN ./mvnw install

# Copy the built JAR file to a smaller image (multi-stage build)
FROM openjdk:21-jdk-slim
WORKDIR /app
COPY --from=0 /workspace/backend/target/taskone-0.0.1-SNAPSHOT.jar /app/app.jar

# Copy frontend code
COPY task-1-challenge/frontend /workspace/frontend

# Expose ports
EXPOSE 8080 3000

# Start backend in background and frontend with http.server
CMD ["sh", "-c", "java -jar /app/app.jar & python3 -m http.server 3000 --directory /workspace/frontend"]