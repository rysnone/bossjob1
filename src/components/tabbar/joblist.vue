<template>
  <div class="mui-container job-container">
    <div class="select-box">
      <div class="left">
        <span class="active">推荐</span>
        <span>最新</span>
      </div>
      <div class="right">
        <span>桂林</span>
        <span>筛选</span>
      </div>
    </div>
    <ul class="list-box">
      <li class="li-item">
        <a href="javascript:;">
          <div class="first-line">
            <h2 class="left">web前端</h2>
            <h2 class="right">9-14k</h2>
          </div>
          <div class="second-line">
            <span>5-10年</span>
            <span>大专</span>
          </div>
          <div class="third-line">
            <span>柯莱特集团</span>
            <span>已上市</span>
            <span>1000-9999人</span>
          </div>
          <div class="fourth-line">
            <div class="left clearfix">
              <img src="../../images/cbd.jpg" class="f_l" />
              <span class="f_l">刘晓乐 人事专员</span>
            </div>
            <div class="right">深圳 南山区 南油</div>
          </div>
        </a>
      </li>
      <li class="li-item">
        <a href="javascript:;">
          <div class="first-line">
            <h2 class="left">web前端</h2>
            <h2 class="right">9-14k</h2>
          </div>
          <div class="second-line">
            <span>5-10年</span>
            <span>大专</span>
          </div>
          <div class="third-line">
            <span>柯莱特集团</span>
            <span>已上市</span>
            <span>1000-9999人</span>
          </div>
          <div class="fourth-line">
            <div class="left clearfix">
              <img src="../../images/cbd.jpg" class="f_l" />
              <span class="f_l">刘晓乐 人事专员</span>
            </div>
            <div class="right">深圳 南山区 南油</div>
          </div>
        </a>
      </li>
      <li class="li-item">
        <a href="javascript:;">
          <div class="first-line">
            <h2 class="left">web前端</h2>
            <h2 class="right">9-14k</h2>
          </div>
          <div class="second-line">
            <span>5-10年</span>
            <span>大专</span>
          </div>
          <div class="third-line">
            <span>柯莱特集团</span>
            <span>已上市</span>
            <span>1000-9999人</span>
          </div>
          <div class="fourth-line">
            <div class="left clearfix">
              <img src="../../images/cbd.jpg" class="f_l" />
              <span class="f_l">刘晓乐 人事专员</span>
            </div>
            <div class="right">深圳 南山区 南油</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
$blue: #37c2bb;
$fontcolor: #666666;
.job-container {
  .select-box {
    width: 100%;
    position: fixed;
    z-index: 1;
    height: 46px;
    background: white;
    border-bottom: 1px solid #efeff4;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    padding: 0px 16px;
    line-height: 46px;
    & > div {
      .active {
        font-weight: bold;
        color: #333333;
      }
      span {
        color: $fontcolor;
        margin-right: 6px;
        font-size: 16px;
      }
    }
    & > div:nth-child(1) {
    }
    & > div:nth-child(2) {
      span {
        background: #f5f5f5;
        color: #999999;
        border-radius: 2px;
        padding: 4px 8px;
        margin-right: 6px;
        &::after {
          content: "";
          display: inline-block;
          width: 0;
          height: 0;
          border-bottom: 6px solid #cecece;
          border-left: 6px solid transparent;
          margin-left: 3px;
        }
      }
      span:nth-child(1) {
      }
    }
  }
  .list-box {
    padding-top: 46px;
    li.li-item {
      background: white;
      padding: 16px;
      margin-bottom: 16px;
      a {
        & > div {
          display: -webkit-flex;
          display: flex;
          margin: 7px 0px;
          // justify-content: space-between;
        }
        & > div:nth-child(2),
        & > div:nth-child(4) {
          font-size: 14px;
        }
        & > div:nth-child(1) {
          justify-content: space-between;
          * {
            font-size: 22px;
            font-weight: bold;
          }
          h2:nth-child(1) {
            color: #333333;
          }
          h2:nth-child(2) {
            color: $blue;
          }
        }
        & > div:nth-child(2) {
          span {
            background: #f5f5f5;
            color: #999999;
            border-radius: 2px;
            padding: 4px 6px;
            margin-right: 6px;
          }
        }
        & > div:nth-child(3) {
          * {
            font-size: 16px;
            color: #666666;
          }
          span {
            margin-right: 6px;
          }
        }
        & > div:nth-child(4) {
          justify-content: space-between;
          &>div{
            line-height: 32px;
          }
          .left {
            img {
              width: 32px;
              height: 32px;
              border-radius: 50%;
              margin-right: 6px;
            }
            span.f_l {
              color: #666666;
            }
          }
          .right {
            color: #aaaaaa;
          }
        }
      }
    }
  }
}
</style>