package com.teamtreehouse.giflib.service;

import com.teamtreehouse.giflib.model.Gif;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface GifService {
    List<Gif> findAll();
    Gif findById(Long id);
    void save(Gif gif, MultipartFile file);
    void delete(Gif gif);
    void toggleFavorite(Gif gif);
}
