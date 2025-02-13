FROM openjdk:21-jdk-slim

WORKDIR /workspace

# Copy backend code and build
COPY task-1-challenge/taskone /workspace/backend
WORKDIR /workspace/backend
RUN ./mvnw install

# Copy the built JAR file to a smaller image (multi-stage build)
FROM openjdk:21-jdk-slim
WORKDIR /app

# Copy the JAR and the static files in one go
COPY --from=0 /workspace/backend/target/taskone-0.0.1-SNAPSHOT.jar /app/app.jar
COPY --from=0 /workspace/backend/src/main/resources/static /app/static

EXPOSE 8080

CMD ["java", "-jar", "/app/app.jar"]