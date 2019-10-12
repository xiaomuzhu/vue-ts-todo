<template>
  <div class="habitList">
    <van-swipe-cell :right-width="65" :left-width="65" class="listSwipe">
      <aside
        class="edit"
        v-if="leftValue"
        slot="left"
        @click="$emit('click-left', id)"
      >
        {{ leftValue }}
      </aside>
      <slot
        v-else
        slot="left"
        @click="$emit('click-right', id)"
        name="act"
      ></slot>
      <van-cell-group class="listGroup">
        <van-cell class="van-ellipsis listCell" :style="{ background: color }">
          <template slot="title">
            <icon :name="iconName" />
            <span>{{ name }}</span>
          </template>
          <van-icon v-if="isDone" name="certificate" />
        </van-cell>
      </van-cell-group>
      <aside
        class="delete"
        v-if="rightValue"
        slot="right"
        @click="$emit('click-right', id)"
      >
        {{ rightValue }}
      </aside>
      <slot
        v-else
        slot="right"
        @click="$emit('click-right', id)"
        name="del"
      ></slot>
    </van-swipe-cell>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  Progress,
  Circle,
  Button,
  SwipeCell,
  Cell,
  CellGroup,
  Icon
} from "vant";
import { ITodoItem } from "../store/state";

@Component({
  components: {
    [Circle.name]: Circle,
    [Button.name]: Button,
    [SwipeCell.name]: SwipeCell,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon
  }
})
export default class TodoItem extends Vue {
  @Prop() private name!: string;
  @Prop() private iconName!: string;
  @Prop() private color!: string;
  @Prop() private isDone!: boolean;
  @Prop() private id!: number;
  @Prop() private rightValue?: string;
  @Prop() private leftValue?: string;
}
</script>

<style lang="scss" scoped>
//字体大小、行高、字体
@mixin font($size: 1rem, $line-height: 100%, $family: "Microsoft YaHei") {
  font: #{$size}/#{$line-height} $family;
}

.listGroup {
  display: flex;
  justify-content: center;
  align-items: center;
}

.listCell {
  border: solid;
  width: 95%;
  border-width: 0.08rem;
  justify-content: space-between;
  align-items: center;
  @include font(1.2rem, 1rem);
  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
  }
  span {
    display: inline-block;
    transform: translateY(-35%);
    @include font(1.2rem, 1rem);
  }
}

.listSwipe {
  box-sizing: border-box;
  margin: 1.5rem 0;
  aside {
    height: 100%;
    background-color: #ff4149;
    width: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
  }
  .edit {
    background-color: #444;
  }
}

.habitList {
  margin: 0.5rem 0;
}
</style>
