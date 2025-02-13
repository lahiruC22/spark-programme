package com.spark.taskone.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.spark.taskone.model.Task;

public interface TaskRepository extends MongoRepository<Task, String> {
}
