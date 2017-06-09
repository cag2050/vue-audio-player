<template lang="pug">
.outer
    .inner
        .play
            .stateicon(@click="play")
            .title
                .name {{ fileName }}
                .tip {{ duration }}
            el-progress(:percentage="current" status="success" :show-text='false')
            el-slider(v-model="volume" @change="changeVolume")
            .loop_tip 循环播放
            el-switch(v-model="loopValue" @change="changeLoop" on-text="" off-text="" on-color="#ffd600" off-color="#bfcbd9")
        audio(controls ref="audio" autoplay @loadeddata='loadeddata' @timeupdate="timeupdate")
            source(src="http://oodr8juo6.bkt.clouddn.com/1MP3.mp3" type="audio/mpeg")
</template>

<script>

export default {
    name: 'source',
    components: {
    },
    mounted () {
        this.$refs.audio.loop = true
    },
    data () {
        return {
            fileName: '.mp3',
            duration: '0:00',
            percent: 0,
            volume: 50,
            current: 0,
            loopValue: true
        }
    },
    methods: {
        play () {
            if (this.$refs.audio.paused) {
                this.$refs.audio.play()
            } else {
                this.$refs.audio.pause()
            }
        },
        loadeddata () {
            this.duration = '时长 ' + this.formate(this.$refs.audio.duration)
        },
        timeupdate () {
            this.current = this.$refs.audio.currentTime / this.$refs.audio.duration * 100
        },
        changeVolume (value) {
            this.$refs.audio.volume = value / 100
        },
        changeLoop (value) {
            this.$refs.audio.loop = value
        },
        formate (time) {
            let hour, minute, second
            if (time > 0) {
                hour = Math.floor(time / (60 * 60))
                minute = Math.floor(time / 60) - (hour * 60)
                second = Math.floor(time) - (hour * 60 * 60) - (minute * 60)
                if (hour <= 9) hour = '0' + hour
                if (minute <= 9) minute = '0' + minute
                if (second <= 9) second = '0' + second
            }
            if (time <= 0) {
                hour = 0
                minute = 0
                second = 0
                return '00:00'
            }
            if (hour === '00') {
                return minute + ':' + second
            } else {
                return hour + ':' + minute + ':' + second
            }
        }
    }
}
</script>

<style lang="stylus">
.outer
    .inner
        background-color white
        margin 0 auto
        .play
            height 108px
            line-height 108px
            background-color #f9f9f9
            padding 0 30px 0 30px
            position relative
            .stateicon
                width 60px
                height 60px
                border-radius 30px
                background-color #ffffff
                border solid 1px #e1e1e1
                position relative
                top 24px
            .title
            	height 20px
            	font-size 14px
            	font-weight 500
            	line-height 1.43
            	color #23232b
            	position relative
            	left 80px
            	top -28px
            	.name
            	    float left
            	.tip
            	    height 16px
                	font-size 12px
                	line-height 1.33
                	color #878787
                	left 10px
                	float left
                	top 3px
                	position relative
            .operate
            	height 36px
            	border-radius 2px
            	background-color #f9f9f9
            	border solid 1px #e1e1e1
            	position absolute
            	right 30px
            	top 122px
            	.word
            	    top 8px
            	    text-align center
            	    position relative
            	    height 20px
            	    font-size 13px
            	    line-height 1.54
            	    color #23232b
            .el-progress
                width 70%
                padding-left 80px
                height 4px
                top -16px
                .el-progress-bar
                    .el-progress-bar__outer
                        background-color #ededed
                        height 4px !important
                        border-radius 2px
                        .el-progress-bar__inner
                            background-color #ffd600
                            border-radius 2px
            .el-slider
                width 15%
                padding-left 80px
                height 4px
                top 48px
                right 30px
                position absolute
                .el-slider__runway
                    top 2px
                    .el-slider__bar
                        background-color #ffd600
                    .el-slider__button-wrapper
                        .el-tooltip
                            top 11px
                            position absolute
                            background-color white
                            border 2px solid #ffd600
            .loop_tip
                position absolute
                width 60px
                font-size 13px
                color #878787
                height: 36px;
                line-height: 36px;
                vertical-align: middle;
                top: 122px
            .el-switch
                top 129px
                left 94px
                position absolute
                .el-switch__core
                    height: 20px;
                    border-radius: 24px;
                    background-color: #ffd600;
                    // box-shadow: 0 4px 4px 0 rgba(255, 214, 0, 0.3);
                    .el-switch__button
                        width: 12px;
                        height: 12px;
                        top: 1px;
                        left: 2px;
        audio
            position relative
            top 60px
</style>
