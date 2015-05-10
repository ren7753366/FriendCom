package com.shareideals.service;

import com.shareideals.dao.UserDao;
import com.shareideals.domain.WBUser;

public class UserService {
	private UserDao userDao;
	
	
	public void addUser(WBUser user){
		if(user==null){
			System.out.println("user 对象是空的");
		}else{
			System.out.println("user 对象不是空的");
		}
		if(userDao==null){
			System.out.println("userDao 对象没注入进去");
		}else{
			System.out.println("userDao 对象注入进去了");
		}
		userDao.addUser(user);
	}
	
	public void deleteUser(WBUser user){
		userDao.deleteUser(user);
	}
	
	public UserDao getUserDao() {
		return userDao;
	}

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}
	
}
