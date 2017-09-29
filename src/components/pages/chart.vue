<template>
	<div>
		<div class="layout-breadcrumb">
		    <Breadcrumb>
		      <Breadcrumb-item>统计分析</Breadcrumb-item>
		      <Breadcrumb-item>销售图表</Breadcrumb-item>
		    </Breadcrumb>
		</div>
		<div>
			<h2 class="h2-title">折线图</h2>
			 <ve-line :data="chartData" :settings="chartSettings"></ve-line>
		</div>
		<div>
			<Row class="flex">
				<i-col :span="spanLeft">
					<div>
						<h2 class="h2-title">柱形图</h2>
						<ve-histogram :data="chartData1" :settings="chartSettings1"></ve-histogram>
					</div>
				</i-col>
				<i-col :span="spanRight">
					<div>
						<h2 class="h2-title">饼状图</h2>
						<ve-pie :data="chartData2" :settings="chartSettings2"></ve-pie>
					</div>
				</i-col>
			</Row>
		</div>
	</div>
</template>
<script>
export default {
  data () {
    return {
      spanLeft: 18,
      spanRight: 6,
      chartData: {
        columns: ['日期', '销售额-1季度', '销售额-2季度', '占比', '其他'],
        rows: [
          { '日期': '1月1日', '销售额-1季度': 1523, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月2日', '销售额-1季度': 1223, '销售额-2季度': 1523, '占比': 0.345, '其他': 100 },
          { '日期': '1月3日', '销售额-1季度': 2123, '销售额-2季度': 1523, '占比': 0.7, '其他': 100 },
          { '日期': '1月4日', '销售额-1季度': 4123, '销售额-2季度': 1523, '占比': 0.31, '其他': 100 },
          { '日期': '1月5日', '销售额-1季度': 3123, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月6日', '销售额-1季度': 7123, '销售额-2季度': 1523, '占比': 0.65, '其他': 100 }
        ]
      },
      chartSettings: {},
      chartData1: {
        columns: ['日期', '成本', '利润', '占比', '其他'],
        rows: [
          { '日期': '1月1日', '成本': 1523, '利润': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月2日', '成本': 1223, '利润': 1523, '占比': 0.345, '其他': 100 },
          { '日期': '1月3日', '成本': 2123, '利润': 1523, '占比': 0.7, '其他': 100 },
          { '日期': '1月4日', '成本': 4123, '利润': 1523, '占比': 0.31, '其他': 100 }
        ]
      },
      chartSettings1: {},
      chartData2: {
        columns: ['日期', '销售额-1季度', '销售额-2季度', '占比', '其他'],
        rows: [
          { '日期': '1月1日', '销售额-1季度': 1523, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月2日', '销售额-1季度': 1223, '销售额-2季度': 1523, '占比': 0.345, '其他': 100 },
          { '日期': '1月3日', '销售额-1季度': 2123, '销售额-2季度': 1523, '占比': 0.7, '其他': 100 },
          { '日期': '1月4日', '销售额-1季度': 4123, '销售额-2季度': 1523, '占比': 0.31, '其他': 100 },
          { '日期': '1月5日', '销售额-1季度': 3123, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月6日', '销售额-1季度': 7123, '销售额-2季度': 1523, '占比': 0.65, '其他': 100 }
        ]
      },
      chartSettings2: {
        dimension: '日期',
        metrics: '销售额-1季度',
        dataType: 'KMB',
        selectedMode: 'single',
        hoverAnimation: false,
        radius: 100,
        offsetY: 200
      }
    }
  }
}
</script>
<style lang="scss" scoped src="../../assets/scss/style.scss">