package com.shareideals.dao;

import java.sql.SQLException;

import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

import com.shareideals.domain.WBUser;

public class UserDao extends SqlMapClientDaoSupport {
	public void addUser(WBUser user){
		try {
			this.getSqlMapClient().insert("w.b.user.insertWBUser",user);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public void deleteUser(WBUser user){
		try {
			this.getSqlMapClient().delete("saveUser",user);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
