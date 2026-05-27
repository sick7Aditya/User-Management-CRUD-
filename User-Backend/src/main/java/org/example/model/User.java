package org.example.model;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document("users")
@Data
public class User {

    @Id
    private String id;

    private String name;
    private int age;
    private String course;

    private List<String> subject;

}
