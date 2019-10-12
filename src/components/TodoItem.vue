<template>
  <div class="habitList">
    <van-swipe-cell>
      <template slot="left">
        <van-button square type="primary" text="选择" />
      </template>

      <van-cell :border="false" title="单元格" value="内容" />

      <template slot="right">
        <van-button square type="danger" text="删除" />
        <van-button square type="primary" text="收藏" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Progress, Circle, Button, SwipeCell, Cell, CellGroup } from "vant";

@Component({
  components: {
    [Circle.name]: Circle,
    [Button.name]: Button,
    [SwipeCell.name]: SwipeCell,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
})
export default class TodoItem extends Vue {
  @Prop() private msg!: string;
  private currentRate!: number;

  private data() {
    return {
      currentRate: 0
    };
  }

  private get text() {
    return this.currentRate.toFixed(0) + "%";
  }
}
</script>
