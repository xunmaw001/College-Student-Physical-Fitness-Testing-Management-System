package com.entity.view;

import com.entity.CeshichengjiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 测试成绩
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-05-11 12:19:13
 */
@TableName("ceshichengji")
public class CeshichengjiView  extends CeshichengjiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public CeshichengjiView(){
	}
 
 	public CeshichengjiView(CeshichengjiEntity ceshichengjiEntity){
 	try {
			BeanUtils.copyProperties(this, ceshichengjiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
