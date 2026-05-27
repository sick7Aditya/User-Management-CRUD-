package org.example.Repo;

import org.example.model.Login;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LoginRepo extends MongoRepository<Login,String> {
}
