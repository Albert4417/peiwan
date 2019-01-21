package com.peiwan.serviceimpl;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.peiwan.bean.TSort;
import com.peiwan.dao.ZsdSortMapper;
import com.peiwan.service.ZsdSortService;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author bjlz
 * @since 2019-01-02
 */
@Service
public class ZsdSortServiceImpl extends ServiceImpl<ZsdSortMapper, TSort> implements ZsdSortService {

    @Resource
    private ZsdSortMapper zsdSortMapper;

    /**
    * @description: 分页查询板块数据
    * @author: 张帅东
    */
    @Override
    public IPage<TSort> queryGamePage(@Param("pg") Page<TSort> page, TSort tSort) {
        QueryWrapper<TSort> wrapper = new QueryWrapper<>();
        /**根据板块id查询*/
        if(tSort.getGid()!=null){
            wrapper.eq("gid",tSort.getGid());
        }
        /**根据板块名模糊查询*/
        wrapper.like("g_name",tSort.getGName());
        wrapper.orderByDesc("gid");
        IPage<TSort> tSortPage = zsdSortMapper.selectPage(page,wrapper);
        return tSortPage;
    }

    /**
    * @description: 根据板块id删除板块信息
    * @author: 张帅东
    */
    @Override
    public int deleteGameById(Integer id) {
        return zsdSortMapper.deleteById(id);
    }

    /**
    * @description: 查询板块id最大值+1
    * @author: 张帅东
    */
    @Override
    public int selectGameId() {
        return zsdSortMapper.selectGameId();
    }

    /**
    * @description: 校验板块名是否存在
    * @author: 张帅东
    */
    @Override
    public Boolean selectGameName(TSort tSort) {
        QueryWrapper<TSort> wrapper = new QueryWrapper<>();
        wrapper.eq("g_name",tSort.getGName());
        TSort tSort1 = zsdSortMapper.selectOne(wrapper);
        boolean result=false;
        if (tSort1!=null){
            result=true;
        }
        return result;
    }

    /**
    * @description: 增加新板块
    * @author: 张帅东
    */
    @Override
    public void addGame(TSort tSort) {
        zsdSortMapper.insert(tSort);
    }

    /**
     * @description: 根据板块id批量删除
     * @author: 张帅东
     */
    @Override
    public int deleteGames(List idList) {
        return zsdSortMapper.deleteBatchIds(idList);
    }


    public ZsdSortMapper getZsdSortMapper() {
        return zsdSortMapper;
    }

    public void setZsdSortMapper(ZsdSortMapper zsdSortMapper) {
        this.zsdSortMapper = zsdSortMapper;
    }
}
