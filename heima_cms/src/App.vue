<template>
    <div class="container">
    <!-- 页头 -->
    <mt-header fixed title="黑马程序员 | SH8">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <!-- 中间内容区域 -->
    <!-- 给 router-view 组件添加一个类, 那么将来展示在这个位置的组件都会继承这个类 -->
    <!-- 因为这个位置将来可能会展示多个组件, 如果不做统一处理, 那么每个组件都需要添加这个类, 太繁琐. 我们直接添加给 router-view , 这样每个展示在此处的组件, 都会继承这个类, 就实现了统一处理 -->
    <router-view class="content"></router-view>

    <!-- 底部导航菜单 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/news">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.content{
	margin-top:40px;
}
</style>
