package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.CeshichengjiEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.CeshichengjiVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.CeshichengjiView;


/**
 * 测试成绩
 *
 * @author 
 * @email 
 * @date 2022-05-11 12:19:13
 */
public interface CeshichengjiService extends IService<CeshichengjiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<CeshichengjiVO> selectListVO(Wrapper<CeshichengjiEntity> wrapper);
   	
   	CeshichengjiVO selectVO(@Param("ew") Wrapper<CeshichengjiEntity> wrapper);
   	
   	List<CeshichengjiView> selectListView(Wrapper<CeshichengjiEntity> wrapper);
   	
   	CeshichengjiView selectView(@Param("ew") Wrapper<CeshichengjiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<CeshichengjiEntity> wrapper);
   	

    List<Map<String, Object>> selectValue(Map<String, Object> params,Wrapper<CeshichengjiEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params,Wrapper<CeshichengjiEntity> wrapper);

    List<Map<String, Object>> selectGroup(Map<String, Object> params,Wrapper<CeshichengjiEntity> wrapper);
}

