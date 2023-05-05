package com.hrsystem.hrsystem.method.common;

import java.security.SecureRandom;
import java.util.Random;

public class RandomPasswordGenerator {
    private static final String CHAR_LOWER = "abcdefghijklmnopqrstuvwxyz";
    private static final String CHAR_UPPER = CHAR_LOWER.toUpperCase();
    private static final String SPECIAL_CHARS = "!@#$%&*()_+-=[]?";
    private static final String NUMBERS = "0123456789";
    private static final String DATA_FOR_RANDOM_STRING = CHAR_LOWER + CHAR_UPPER + SPECIAL_CHARS + NUMBERS;
    private static final Random random = new SecureRandom();

    public static String generateRandomString(int length) {

        StringBuilder sb = new StringBuilder(length);
        
        for (int i = 0; i < length; i++) {
        	
            int randomIndex = random.nextInt(DATA_FOR_RANDOM_STRING.length());
            sb.append(DATA_FOR_RANDOM_STRING.charAt(randomIndex));
            
        }
        
        return sb.toString();
    }

}
