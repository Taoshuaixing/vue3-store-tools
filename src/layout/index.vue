<template>
  <section class="decoration-edit">
    <section class="l">
      <div class="group">
        <draggable
          :list="state.modules.arr1"
          animation="300"
          ghost-class="ghost"
          handle=".move"
          filter=".forbid"
          :force-fallback="true"
          chosen-class="chosenClass"
          :group="state.groupA"
          :sort="false"
          :fallback-tolerance="50"
          :fallback-class="true"
          :fallback-on-body="true"
          :touch-start-threshold="50"
          :move="onMove"
        >
          <template #item="{ element }">
            <div class="l-list move">
              <img
                :src="element.img"
                :alt="element.name"
                class="icon"
              >
              <div>{{ element.name }}</div>

              <!-- <component
                :is="element.icons"
                style="width: 20px; height: 20px"
              ></component> -->
              <!-- <p>{{ element.name }}</p> -->
            </div>
          </template>
        </draggable>
      </div>
    </section>
    <section class="c">
      <div class="top-nav">
        <img src="@/assets/topNavBlack.png">
        <span class="tit">{{ topInfo.title }}</span>
      </div>
      <div class="view-content">
        <draggable
          :list="state.modules.arr2"
          ghost-class="end-ghost"
          handle=".move"
          filter=".forbid"
          :force-fallback="true"
          chosen-class="endClass"
          animation="300"
          :group="state.groupB"
          :fallback-class="true"
          :fallback-on-body="true"
          :touch-start-threshold="50"
          :fallback-tolerance="50"
          :move="onMove"
          @start="onStart"
          @end="onEnd"
        >
          <template #item="{ element }">
            <div
              class="r-list move"
              @click="onClick(element, state.modules.arr2)"
            >
              <component :is="element.com"></component>
            </div>
          </template>
        </draggable>
      </div>
    </section>
    <section class="r">
      <RightPanel :list="list"></RightPanel>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from "vue";
import Banner from "@/components/material/Banner.vue";
import Images from "@/components/material/Images.vue";
import Product from "@/components/material/Product.vue";
import draggable from "vuedraggable";
import RightPanel from '@/layout/components/right-panel/index.vue'
const view = reactive([{
  type: 'info',
  title: '页面标题'
}])
const topInfo = computed(() => {
  return view[0]
})
let list: any = reactive([])
const state = reactive({
  groupA: {
    name: "itxst",
    put: false, //允许拖入
    pull: 'clone',
  },
  groupB: {
    name: "itxst",
    put: true, //允许拖入
  },
  modules: {
    arr1: [
      {
        name: '搜索框',
        id: 1,
        icons: 'Plus',
        com: Banner,
        img: 'http://img63.ddimg.cn/upload_img/00858/cms_shop/lib-search-1605503420.png'
      }, {
        name: '商品',
        id: 2,
        icons: 'Loading',
        com: Product,
        img: 'http://img63.ddimg.cn/upload_img/00858/cms_shop/spe-general-goods-1598172220.png'
      },
      {
        name: '图片',
        id: 3,
        icons: 'House',
        com: Images,
        img: 'http://img63.ddimg.cn/upload_img/00846/cms_shop/lib-carousel-1603265770.png'
      }
    ],
    arr2: [
      {
        name: '图片',
        id: 3,
        icons: 'House',
        com: Images
      }
    ],
  },
});

//拖拽开始的事件
const onStart = () => {
  console.log("开始拖拽");
};

//拖拽结束的事件
const onEnd = () => {
  console.log("结束拖拽");
};
const onMove = (e, originalEvent) => {
  console.log(e, originalEvent);
};
function onClick (e, data) {
  console.log(e.name, data);
  list = e

}

</script>

<style lang="scss" scoped>
.end-ghost {
  border: 2px solid #409EFF;
  box-shadow: 2px 2px 2px #333;
}

.r-list {
  cursor: move;
}

.decoration-edit {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f8f9;
  padding: 10px 0;
  height: calc(100vh - 50px);
  position: relative;

  .l,
  .r {
    width: 340px;
    height: 100%;
    padding: 15px 0;
    background-color: #fff;
  }

  .l {
    .group {
      margin: 0;
      padding: 0;

      div:first-child {
        display: flex;
        flex-wrap: wrap;

        .l-list {
          display: block;
          flex: 0 0 100px;
          padding: 5px;
          margin: 5px;
          color: #2e4365;
          text-align: center;
          cursor: move;
          background-color: #fff;
          box-sizing: border-box;
          border-radius: 10px;
          transition: all 0.3s;
          border: 1px solid #333;



          .icon {
            margin: 0 auto 10px;
            display: block;
            width: 40px;
            min-height: 40px;
          }


          &:hover {
            background-color: #efefef;
            cursor: move;
            border: 1px solid #409EFF;
            color: #409EFF;

          }

          span {
            display: block;
            font-size: 40px;
            margin-bottom: 8px;
            color: #999;
          }

          p {
            display: block;
            margin: 0;
            font-size: 12px;
          }
        }
      }
    }
  }

  .c {
    width: auto;
    max-width: 400px;
    position: relative;

    .top-nav {
      position: absolute;
      top: 0;
      background: #fff;
      z-index: 999;
      transition: all .3s;

      & * {
        pointer-events: none;
      }

      &:hover {
        transform: scale(0.95);
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 0 10px #afafaf;
      }

      .tit {
        position: absolute;
        left: 50%;
        bottom: 10px;
        transform: translateX(-50%);
      }

      img {
        max-width: 100%;
        image-rendering: -moz-crisp-edges;
        image-rendering: -o-crisp-edges;
        image-rendering: -webkit-optimize-contrast;
        image-rendering: crisp-edges;
        -ms-interpolation-mode: nearest-neighbor;
      }
    }

    .view-content {
      width: 400px;
      height: 700px;
      background: #f5f5f5;
      overflow-y: auto;
      overflow-x: hidden;
      padding-top: 72px;
      box-shadow: 0 2px 6px #ccc;

      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-thumb {
        background: #dbdbdb;
      }

      &::-webkit-scrollbar-track {
        background: #f6f6f6;
      }

      .r-list {
        transition: all .3s;
        background: #fff;

        &:hover {
          transform: scale(0.95);
          border-radius: 10px;
          box-shadow: 0 0 10px #afafaf;

          .el-icon-error {
            display: block;
          }
        }

        div {
          pointer-events: none;
        }

        .wait {
          background: #deedff;
          height: 35px;
          text-align: center;
          line-height: 35px;
          font-size: 12px;
          color: #666;
        }

        .el-icon-error {
          position: absolute;
          right: -10px;
          top: -6px;
          color: red;
          font-size: 25px;
          cursor: pointer;
          display: none;
          z-index: 9999;
        }
      }
    }
  }
}
</style>
