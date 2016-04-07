package com.teamtreehouse.giflib.model;

import java.util.ArrayList;
import java.util.List;

public class Category {
    private Long id;
    private String name;
    private String colorCode;
    private List<Gif> gifs = new ArrayList<>();

    public Category(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColorCode() {
        return colorCode;
    }

    public void setColorCode(String colorCode) {
        this.colorCode = colorCode;
    }

    public List<Gif> getGifs() {
        return gifs;
    }

}
