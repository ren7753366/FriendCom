package com.shareideals.action;

import com.opensymphony.xwork2.ActionSupport;
import com.shareideals.domain.WBUser;
import com.shareideals.service.UserService;

public class UserDelAction extends ActionSupport{
	private static final long serialVersionUID = 6912391687787646716L;
	private static final String FAIL = null;
	private UserService userService;
	private String username;
	private String password;
	
	public String addUser(){
		System.out.println("username="+username+"   password="+password);
		try {
			WBUser tuser=new WBUser();
			tuser.setUsername(username);
			tuser.setPassword(password);
			userService.deleteUser(tuser);
			return SUCCESS;
		} catch (Exception e) {
			e.printStackTrace();
			return FAIL;
		}
	}
	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
