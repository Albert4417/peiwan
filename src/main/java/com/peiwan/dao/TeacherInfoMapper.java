package com.peiwan.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.peiwan.bean.TPerson;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

/**
 * @Author: zhangwanli
 * @Despriction:dao
 * @Date:Created in 12:07 2019/1/4
 * @Modify by:
 */
@Mapper
public interface TeacherInfoMapper extends BaseMapper<TPerson> {

    /*获取主播详情信息*/
    @Select("select * from t_person left join t_ality on t_person.pid=t_ality.pid where t_person.pid=#{zid}")
    Map<String, Object> selectInfo(Integer zid);

    /*分页查询  评论信息*/
    @Select("select ps.person_nickname ,ps.person_image ,pc.c_createtime,pc.c_context,pc.c_rank,pc.cid from t_comment pc left join t_person ps on pc.pid = ps.pid where pc.zid=#{zid} and pc.gid=#{gid}")
    List<Map<String, Object>> selectPageExt(Page<Map<String, Object>> page, Integer zid, Integer gid);

    /*获取主播总评分的平均数*/
    @Select("select avg(c_rank) from t_comment where zid =#{zid}")
    Double selectavg(Integer zid);

    /*获取主播指定服务评分的平均数*/
    @Select("select count(gid) selectpagesize,avg(c_rank) avgrank from t_comment where zid =#{zid} and gid=#{gid}")
    Map<String, Object> selectfuwuavg(Integer zid, Integer gid);

    /*多条数据获取主播服务类型*/
    @Select("select pid, gid ,g_name from t_service where pid=#{zid}")
    List<Map<String, Object>> selectZhuboService(Integer zid);

    /* 依据 zid  获取主播的  全部服务 的 段位 价格 服务介绍 */
    @Select("select gs.gid, gs.g_name,gs.g_price,gs.g_duanwei,gs.g_servicedescription from t_service gs  where gs.pid=#{zid}")
    List<Map<String, Object>> selectZhudp(Integer zid);

    /*依据 zid gid 获取接单次数   */
    @Select("select count(oid) from t_comment where zid =#{zid} and gid=#{gid} ")
    Integer countdan(Integer zid, Integer gid);

    /*依据 zid  获取全部接单次数   */
    @Select("select count(oid) from t_comment where zid =#{zid}")
    Integer countzongdan(Integer zid);

    /* 获取全部评论信息*/
    @Select("select ps.person_nickname ,ps.person_image ,pc.c_createtime,pc.c_context,pc.c_rank,pc.cid from t_person ps,t_comment pc where ps.pid in (select pco.pid from t_comment pco where pco.zid=#{zid} and pco.gid=#{gid}) group by pc.cid ")
    List<Map<String, Object>> selectComment(Integer zid, Integer gid);
}
