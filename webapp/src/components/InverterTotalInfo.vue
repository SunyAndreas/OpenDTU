<template>
    <div class="row row-cols-1 row-cols-md-3 g-3">
        <div class="col">
            <div class="card">
                <div class="card-header text-bg-success">{{ $t('invertertotalinfo.TotalYieldTotal') }}</div>
                <div class="card-body card-text text-center">
                    <h2>
                        {{ $n(totalData.YieldTotal, 'decimal', {
                                maximumFractionDigits: 1
                            })}}
                        <small class="text-muted">kWh</small>
                    </h2>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="card-header text-bg-success">{{ $t('invertertotalinfo.TotalYieldDay') }}</div>
                <div class="card-body card-text text-center">
                    <h2>
                        {{ $n(totalData.YieldDay, 'decimal', {

                                maximumFractionDigits: 0
                            })}}
                        <small class="text-muted">Wh</small>
                    </h2>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="card-header text-bg-success">{{ $t('invertertotalinfo.TotalPower') }}</div>
                <div class="card-body card-text text-center">
                    <h2>
                        {{ $n(totalData.Power, 'decimal', {
                                maximumFractionDigits: 1
                            })}}
                        <small class="text-muted">W</small>
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import type { Total } from '@/types/LiveDataStatus';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    props: {
        totalData: { type: Object as PropType<Total>, required: true },
    },
});
</script>