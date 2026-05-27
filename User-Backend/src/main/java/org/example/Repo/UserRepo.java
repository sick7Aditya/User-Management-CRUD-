package org.example.Repo;


import org.example.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User,String> {

    public void deleteByName(String name);
    public User findByName(String name);
}
