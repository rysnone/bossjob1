<template>
  <div class="app-container">
    <!-- 顶部 Header 区域 -->
    <mt-header fixed title="" class="app-header">
      <mt-button slot="left">web前端</mt-button>
      <mt-button slot="right">
         <span class="mui-icon mui-icon-search"></span>
      </mt-button>
    </mt-header>
    <!-- 中间的路由 router-view 区域 -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 底部 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/joblist">
        <span class="mui-icon iconfont icon-zhiwei2"></span>
        <span class="mui-tab-label">职位</span>
      </router-link>
      <router-link class="mui-tab-item" to="/company">
        <span class="mui-icon iconfont icon-company"></span>
        <span class="mui-tab-label">公司</span>
      </router-link>
      <router-link class="mui-tab-item" to="/news">
        <span class="mui-icon iconfont icon-xinxi1">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link class="mui-tab-item" to="/mycenter">
        <span class="mui-icon iconfont icon-zhiwei"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style lang="scss" scoped>
$blue:#37c2bb;
.app-container {
  .app-header{
    background:$blue;
    height: 42px;
    line-height: 42px;
    z-index: 666;
    font-size: 18px;
  }
  padding: 42px 0;
  
}
</style>

