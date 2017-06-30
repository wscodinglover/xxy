/**
 * XXY is open source and released under the MIT Licence.
 * Copyright (c) 2017 xiexiuyue 
 * email : abc_xf@126.com
 **/
;(function(){
	//'use strict'
	// TODO iphone .............
	
	
	// Let ie support bind
	if (!Function.prototype.bind) {
		Function.prototype.bind = function (oThis) {
			if (typeof this !== "function") {
				throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable") 
			} 
			var aArgs = Array.prototype.slice.call(arguments, 1), 
			fToBind = this, 
			fNOP = function () {}, 
			fBound = function () { 
				return fToBind.apply(this instanceof fNOP && oThis 
				? this
				: oThis, 
				aArgs.concat(Array.prototype.slice.call(arguments))) 
			} 
			fNOP.prototype = this.prototype 
			fBound.prototype = new fNOP() 
			return fBound 
		} 
	}

	/**
	 * Id Dom indexs
	 */
	function id(a){return window.parent.document.getElementById(a)}
	
	/**
	 *  Add style
	 *  param {String} str 
	 *  param {String} val 
	 *  If Id does not exist, add the style
	 */
	function addStyle(str,val){
		if(Boolean(id(str))){
			return false
		}
		var tag = window.parent.document.createElement('style')
		
		tag.id = str
		if ('styleSheet' in tag) {
			tag.setAttribute('type', 'text/css')
			tag.styleSheet.cssText = val 
		} else { 
			tag.innerHTML = val
		} 
		window.parent.document.getElementsByTagName('head')[0].appendChild(tag)
	}
	
	// create dom
	if(!Boolean(id('xxy-addDom'))){
		try{
			var div = window.parent.document.createElement('div')
			div.id = 'xxy-addDom'
			window.parent.document.body.appendChild(div)
		}catch(e){
			console.error('Please put the script below the body tag (not the bottom)--xxy')
		}
	}
	
	// Avoid multiple imports, resulting in a different version of the first class
	if(typeof window.xxy == 'object'){
		console.error('Close the global object of XXY--xxy')
		return false
	}
	
	// styles
	var popup = '#xxy-addDom .xxy-popup-box{position:fixed;top:0;left:0;z-index:99;z-index:99999999;overflow:hidden;width:100%;height:100%;background:rgba(0,0,0,.5);font-size:14px}#xxy-addDom .xxy-popup-box .inner{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:80%;height:0;max-width:280px;background:#fff;color:#646464}#xxy-addDom .xxy-popup-box .inner .inner_box{border:.01px solid #adadad;background:#fff;-webkit-transform:translateY(-50%);transform:translateY(-50%);-ms-transform:translateY(-50%)}#xxy-addDom .xxy-popup-box .xxy-popup-title{width:100%;border-bottom:1px solid #e8e8e8;background-color:#eee;color:#646464;text-align:left;text-indent:.7em;font-size:13px;line-height:2.1em}#xxy-addDom .xxy-popup-box .print{overflow:auto;padding:15px 20px 0;max-height:250px}#xxy-addDom .xxy-popup-box .or{margin:0 auto;width:90%}#xxy-addDom .xxy-popup-box button{border-radius:0px;margin:1em 0;padding:.6em 0;width:48%;border-width:0;border-radius:.4em;color:#fff}#xxy-addDom .xxy-popup-box .xxy-popup-done{background:#febb2c}#xxy-addDom .xxy-popup-box .xxy-popup-cancal{margin-left:4%;background:#eb4b27}#xxy-addDom .xxy-popup-box .off{float:right;margin-right:.4em;font-size:1.3em}#xxy-addDom .print_inner p span:nth-child(1){text-align:right}#xxy-addDom .print_inner p span:nth-child(2){text-align:center}#xxy-addDom .print_inner span{display:inline-block;width:48%}#xxy-addDom .print_inner p .important{color:#febb2c}'
	var toast = '#xxy-addDom .xxy-toast{text-align: center;opacity:1;transition: all 1000ms;-webkit-transition: all 1000ms;position:fixed;bottom:2em;left:50%;padding:.2em 1em;border-radius:1em;background:rgba(0,0,0,.6);color:#fff;font-size:15px;line-height:1.7em;-webkit-transition-timing-function:ease;-webkit-transition-duration:2s;-webkit-transition-property:color;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);min-width:10em}'
	var touch = '.xxy-down-viewbox{position:relative;overflow:hidden;margin:auto;min-width:200px;min-height:200px;box-shadow:2px 2px 10px 1px rgba(0,0,0,.2);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-webkit-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000;-ms-perspective:1000;perspective:1000}.xxy-down-viewbox>div{overflow:auto;width:100%;height:100%;border:0 solid transparent;background:#eee}.xxy-down-viewbox>div:before{top:0;content:attr(data-befor)}.xxy-down-viewbox>div:after,.xxy-down-viewbox>div:before{position:absolute;width:100%;color:#646464;text-align:center}.xxy-down-viewbox>div:after{bottom:5px;content:attr(data-after)}.xxy-down-viewbox>div>*{position:relative;z-index:1;background:#fff}'
	
	var iosPopup = '#xxy-addDom .xxy-popup-box{position:fixed;top:0;left:0;z-index:99;z-index:99999999;overflow:hidden;width:100%;height:100%;background:rgba(0,0,0,.5);font-size:14px}#xxy-addDom .xxy-popup-box .inner{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:80%;height:0;max-width:280px;background:rgba(255,255,255,.95)}#xxy-addDom .xxy-popup-box .inner .inner_box{background:#fff;-webkit-transform:translateY(-50%);transform:translateY(-50%);-ms-transform:translateY(-50%);border-radius:13px}#xxy-addDom .xxy-popup-box .xxy-popup-title{font-size:18px;font-weight:500;text-align:center;padding-top:5px;line-height:2em}#xxy-addDom .xxy-popup-box .print{overflow:auto;padding:0 15px 15px 15px;max-height:250px}#xxy-addDom .xxy-popup-box .or{margin:0 auto;border-bottom-left-radius:13px;border-bottom-right-radius:13px;overflow:hidden}#xxy-addDom .xxy-popup-box button{border-radius:0px;;border-width:0;color:#007aff;background:#fff;background:rgba(255,255,255,.95);font-size:17px;line-height:44px;position:relative;overflow:hidden;box-sizing:border-box;width:50%;height:44px;padding:0 5px;cursor:pointer;text-align:center;white-space:nowrap;text-overflow:ellipsis;color:#007aff;background:rgba(255,255,255,.95);-webkit-box-flex:1;border-top:1px solid #cdcdcd}#xxy-addDom .xxy-popup-box .xxy-popup-cancal{border-left:1px solid #cdcdcd}#xxy-addDom .xxy-popup-box .off{float:right;margin-right:.4em;font-size:1.3em}#xxy-addDom .print_inner p span:nth-child(1){text-align:right}#xxy-addDom .print_inner p span:nth-child(2){text-align:center}#xxy-addDom .print_inner span{display:inline-block;width:48%}#xxy-addDom .print_inner p .important{color:#febb2c}';
	
	// add style
	addStyle('xxy-style-popup',popup)
	addStyle('xxy-style-toast',toast)
	addStyle('xxy-style-touch',touch)
	
	// create xxy
	window.xxy = (function (){
		// defaults config
		var defaults = {}
		// popup configuer
		,popupui = {
			skin: void 0,
			mask: .5,
			an: false
		}
		,addDomName = 'xxy-addDom'
			
		defaults = {}
		defaults.popupui = popupui
		
		/**
		 * preventDefault Prevent mobile end events from bubbling
		 * For example, trigger higher div scroll
		 */
		function preventDefaultEvent(e){
			e.preventDefault()
		}
		
		
		var _init= {
			/**
			 * mixin
			 * param {Object} to 
			 * param {Object} from 
			 */
			mixin: function(to,from){
				for(var i in from){
					to[i] = from[i]
				}
			},
			
			
			/**
			 * get parent Element back function
			 * @param {Object} box
			 * @param {Object} key
			 * @param {Object} val
			 * @param {Object} backcall
			 */
			getParent: function(box,key,val,backcall){
				try{
					if(box[key] === val&&box[key] != void 0){
						backcall(box)
					} else{
						if(!box||box.tagName == 'BODY'){
							return false
						}else{
							var boxParendNode=box.parentNode
							xxy.getParent(boxParendNode)
						}
					}
				}catch(e){
					//TODO handle the exception
				}
			},
			
			/**
			 * config
			 */
			config: function(obj){
				if(Object.prototype.toString.call(obj) !== "[object Object]"){
					console.error('Parameters should be objects--xxy\n docs: https://github.com/0123cf/xxy')
					return false
				}
				this.mixin(defaults.popupui,obj)
			},
			
			/**
			 * Two popups
			 * @param {Object} a title text
			 * @param {Object} b inner text
			 * @param {Object} d baclcall
			 */
			popup:function(a,b,d){
				var cs = arguments
				,title = '提示'
				,inner = ''
				,deon_text = '确认'
				,cancal_text = '取消'
				,fun = false
				
				/**
				 * 	clear to pupup
				 */
				if(Boolean(id('xxy-popup-box'))){
					id('xxy-popup-box').parentNode.removeChild(id('xxy-popup-box'))
				}
				
				// PC scroll
				document.documentElement.style.overflow = 'hidden'
				document.body.style.overflow = 'hidden'
				
				/**
				 * default pupup ui
				 */
				var ui = (function(){
					return this
				}.bind(defaults.popupui))()
				
				/**
				 * callback
				 * @param {Object} a param
				 * @param {Object} b order
				 */
				function callback(a,b){
					for(var i = 0; i < a.length; i++) {
						if(typeof a[i] == 'function') {
							a[i](b)
							break
						}
					}
				}
				
				// carry callback
				for(var i = 0; i < arguments.length; i++){
					typeof arguments[i] == 'function' ? fun = true : ''
				}
				
				// init parmas 
				if(!fun){
					switch(cs.length){
						case 1:
							inner = cs[0]
						break
						case 2:
							title = cs[0]
							inner = cs[1]
						break
						case 4:
							title = cs[0]
							inner = cs[1]
							deon_text = cs[2]
							cancal_text = cs[3]
						break
						default:
							console.error('Parameter format error！--xxy')
					}
				}else{
					switch(cs.length){
						case 2:
							inner = cs[0]
						break
						case 3:
							title = cs[0]
							inner = cs[1]
						break
						case 4:
							inner = cs[0]
							deon_text = cs[1]
							cancal_text = cs[2]
						break
						case 5:
							title = cs[0]
							inner = cs[1]
							deon_text = cs[2]
							cancal_text = cs[3]
						break
						default:
							console.error('Parameter format error！--xxy')
					}
				}
				
				// ios style
				if(ui.skin=='ios'){
					var stylebox = id('xxy-style-popup')
					
					if ('styleSheet' in id('xxy-style-popup')) {
						stylebox.setAttribute('type', 'text/css')
						stylebox.styleSheet.cssText = iosPopup 
					} else { 
						stylebox.innerHTML = iosPopup
					} 
				}
				
				// background Color opaqueness
				var style = {
					background:  'background: rgba(0,0,0,'+ui.mask+')'
				}
				
				var anBaseStyle = 'transition: all 100ms;-webkit-transition: all 100ms'
				,c = [
						'<div style="'+style.background+'" class = "xxy-popup-box" id = "xxy-popup-box">',
							'<div class = "inner" style="',anBaseStyle,'">',
								'<div class = "inner_box">',
									'<div class = "xxy-popup-inner">',
										'<div class = "xxy-popup-title"> <i class = "iconfont icon-tishi"></i> ',title,
											'<i id = "xxy-popup-off" class = "off icon iconfont icon-cha" id = "cash-off"></i>',
										'</div>',
										'<div id = "xxy_popup_inner_print" class = "print">',inner,'</div>',
									'</div>',
									'<div class = "or">',
										'<button class = "xxy-popup-done" id = "xxy-popup-done">',deon_text,'</button>',
										'<button class = "xxy-popup-cancal" id = "xxy-popup-cancal">',cancal_text,'</button>',
									'</div>',
								'</div>',
							'</div>',
						'</div>'
					].join('')
					
				// c add to div
				if(document.body.insertAdjacentHTML){
	            	id('xxy-addDom').insertAdjacentHTML('beforeend',c);
	            }else{
	            	id('xxy-addDom').innerHTML +=  c
	            }
			            
				// ios an 
				if(ui.an){
					var innerBox = window.parent.document.querySelector("#xxy-popup-box .inner")
					
					innerBox.style.cssText = anBaseStyle+'opacity: 0;webkitTransform: scale(1.3,1.3);transform: scale(1.3,1.3)'
					window.setTimeout(function(){
						innerBox.style.cssText = anBaseStyle+'opacity: 1;webkitTransform: scale(1,1);transform: scale(1,1)'
					},50)
				}
				
				// innerdiv scroll
				id('xxy_popup_inner_print').ontouchmove = function(e){
					e.stopPropagation()
				}
				
				try{
					window.parent.document.body.addEventListener('touchmove',preventDefaultEvent,false)	
				}catch(e){
					function iexx(){
						var child = id('xxy-popup-box')
						child.parentNode.removeChild(child)
						try{
							window.parent.document.body.removeEventListener('touchmove',preventDefaultEvent,false)
						}catch(e){}
						// ie8 not support initial sorll
						document.documentElement.style.overflow = 'auto'
					}
					/*ie*/
					id('xxy-popup-done').onclick = function(){
						callback(cs,0)	
						iexx()
					}
					id('xxy-popup-cancal').onclick = function(){
						callback(cs,1)	
						iexx()
					}
					return false
				}
				
				id('xxy-popup-box').addEventListener('click',function(e){
					var e = e.target,
						done = 'xxy-popup-done',
						cancal = 'xxy-popup-cancal'
						
					if(e.id == done||e.id == cancal||e.id == 'xxy-popup-off'){
						var child = id('xxy-popup-box')
						
						child.parentNode.removeChild(child)
						
						window.parent.document.body.removeEventListener('touchmove',preventDefaultEvent,false)
						// body is set height , height not 100%
						document.documentElement.style.overflow = 'initial'
						document.body.style.overflow = 'initial'
						// callback
						if(e.id == done){
							callback(cs,0)			
						}
						if(e.id == cancal){
							callback(cs,1)	
						}
					}
				})
				
			},
			
			/**
			 * alert
			 */
			alert: function(){
				var fun = false
				this.popup.apply(this, [].slice.call(arguments))
				
				var button_  =  window.parent.document.querySelector('#xxy-addDom #xxy-popup-cancal')
				,button_child2 = window.parent.document.querySelector('#xxy-addDom .xxy-popup-box button')
				
				button_.innerText = '确认'
				button_.style.cssText = 'display: block;marginLeft: auto;marginRight: auto;width: 100%'
				button_child2.style.display = 'none'
				id('xxy-popup-off').style.display = 'none'
			},
			
			/**
			 * toast
			 */
			toast: function(a,b){
				var time = (arguments[1]?b:2500)+1000
				,id_name = 'xxy-toast'
				,toast_div = document.createElement('div')
				,toast_node =document.createTextNode(a)
				
				// remove ement
				if(id(id_name)){
					var removeToast = id(id_name)
					removeToast.parentNode.removeChild(removeToast)
					this.toastRemveTime&&window.clearTimeout(this.toastRemveTime)
				}
				
				// create ement
				toast_div.appendChild(toast_node)
				toast_div.id = id_name
				toast_div.className = id_name
				
				// add new && to remove ement
				id(addDomName).appendChild(toast_div)
				this.toastRemveTime = window.setTimeout(function(){
					id(id_name).parentNode.removeChild(id(id_name))
				},time)
			},
			
			/**
			 * Pull-down slide
			 */
			touch: function xxyDown(){	
				var global =  {}
					,start =   "touchstart"
					,move =   "touchmove"
					,end =   "touchend"
					
				xxyDown.bind(global)
					
				function core(box,config){
					if(!window.getComputedStyle)return false
					
					var view  =  box.querySelector('.view')
						,inner  =  box.querySelector('.inner')
						,innerHeight  =  parseInt(window.getComputedStyle(box).height)
						,stopGap = 28 // Stop Gap px
						,stopGapDeviation = 5
					
					inner.addEventListener(start,function(e){
						this.style.transitionDuration  =  '0ms'
						var touch  =  e.touche||e.touches[0],
							top  =  view.scrollTop,
							height  =  window.getComputedStyle(this).height,
							domHeight  =  window.parseInt(height)
						this.startTop  =  top
						this.startSite  =  {
							y: touch.clientY
						}
						this.domHeight  =  domHeight
					},false)
					
					inner.addEventListener(move,function(e){
						var touch =  e.touche||e.touches[0]
						,top =  view.scrollTop
						,startY =  this.startSite.y
						,moveY =  touch.clientY//get Y-axis value
							
						if(moveY>startY){
							// Slide down to top execution
							if(top >1 ) return false
							e.preventDefault()
							
							if(config.move){
								var startTop =  this.startTop
								,gap =  moveY - startY
								,topGap =  (gap-gap/1.37) - this.startTop
								,moveTop = topGap>stopGap+stopGapDeviation
									
								moveTop ? view.setAttribute('data-befor','释放立即刷新') : view.setAttribute('data-befor','下拉刷新')
								this.style.transform =  'translate3d(0, '+topGap+'px, 0)'
								this.topGap = topGap
								this.direction =  'down'
							}
							
						}else{
							var boxHeight  =  config.body ? window.innerHeight : innerHeight
							
							// Pull to the bottom to perform (scroll distance plus auto height equal to UL total height)
							if(top+boxHeight+1 >= this.domHeight){
								e.preventDefault()
								if(config.move){
									this.direction  =  'up'
									var gap  =  moveY-startY,
										v = (gap-gap/1.37)
										
									if(-v>stopGap+stopGapDeviation){
										view.setAttribute('data-after','释放立即刷新')
									}else{
										view.setAttribute('data-after','上拉加载')
									}
									this.style.transform  =  'translate3d(0, '+v+'px, 0)'
									this.topGap = -v
									
								}
							}else{
								return false
							}
						}
					},false)
					
					inner.addEventListener(end,function(e){
						var th = this,
							direction  =  this.direction
							
						e.stopPropagation()
						if(!this.direction)return false
						
						// backcall commit
						config.done = function(){
							th.style.transitionDuration  =  '500ms'
							th.style.transform  =  'translate3d(0, 0px, 0)'
							th.direction  =  undefined
						}
						
						// refresh
						function reloading(){
							var v = void 0
							
							if(direction=='up'){
								v = -stopGap
							}else{
								v = stopGap
							}
							th.style.transitionDuration  =  '500ms'
							th.style.transform  =  'translate3d(0, '+v+'px, 0)'
						}
						
						// not touch gap value min
						if(this.topGap < stopGap+stopGapDeviation){
							config.done()
							return false
						}
						
						// tips
						view.setAttribute('data-befor','正在刷新..')
						view.setAttribute('data-after','正在刷新..')
						
						// backcall
						if(direction == 'down'){
							// sild down Refresh
							config.down&&config.down()
						}else if(direction == 'up'){
							// sild up reloading
							config.up&&config.up()
						}
						// refresh
						reloading()
						
					},false)
				}
				return {
					bind: function(dom,config){
						core(dom,config)
					}
				}
			},
			slider : function(){
				function cors(banner,config){
			        var banner = banner
			        var list = banner.children[0]
			        var rootWidth = -banner.getBoundingClientRect().width
			        var startX = 0
			        var index = 0
			        var translateX = 0
			        var tid = void 0
			        var lis = void 0
			        var points = void 0
					
			        init()
			        autoPlay()
					
					banner.running = false
					
			        //手指按下
			        banner.addEventListener('touchstart', function (ev) {
						
			            startX = ev.changedTouches[0].clientX
						
			            //关闭过渡效果
			            list.style.transition = "0s"
						
			            //关闭自动轮播
			            clearInterval(tid)
						
			            //无缝滑屏 改变index
			            changeIndex()
			            
			        })
			
			        //手指滑动
			        banner.addEventListener('touchmove', function (ev) {
			            //禁止浏览器默认滑动事件
			            ev.preventDefault()
			            
			        	this.running = true
			        	
			            //滑动差值
			            var dis = ev.changedTouches[0].clientX - startX
						
			            //当前list总平移长度
			            translateX = rootWidth * index + dis
			            
			            //响应list滑动平移
			            changePage(0, translateX)
			            
			            // 发布
						config.self.gap(dis)
			        })
					
			        //手指抬起
			        banner.addEventListener('touchend', function (e) {
			        	e.stopPropagation()
			        	
			        	// 手动点击
			        	var target = e.target
			        	target.running = true
			        	;(function qipao(box){
							if(box.id=='slider-right'||box.id=='slider-left'){
								ba(box)
							} else{
								if(!box||box.tagName == 'BODY'){
									return false
								}else{
									var boxParendNode=box.parentNode
									qipao(boxParendNode)
								}
							}
						})(target)
			        	function ba(e){
			        		if(e.id=='slider-right'){
			        			index +=1
				            	changePage(.3, rootWidth * index)
			        		}else{
			        			index -= 1
				            	changePage(.3, rootWidth * index)
			        		}
				            changePoint()
				          	autoPlay()
				            target.running = false
			        	}
			        	if(!target.running)return false
			        	
			        	/**
			        	 * 滑动
			        	 */
			            //根据滑动长度求索引
			            if(this.running){
			            	index - translateX / rootWidth > .2 ? index-- : 
							index - translateX / rootWidth < -.2 ? index++ : ''
						}
			            
			            //越界判断
			            if (index < 0) {
			                index = 0
			            } else if (index > lis.length - 1) {
			                index = lis.length - 1
			            }
			            
			            changePage(.3, rootWidth * index)
			            changePoint()
			            autoPlay()
			            
			        	this.running = false
			        })
			        
			        
			       
			        //自动轮播
			        function autoPlay() {
			            tid = setInterval(function () {
			                changeIndex()
			                changePage(0, rootWidth * index)
							
			                //延时执行，为了让页面切换完毕
			                setTimeout(function () {
			                    index++
			                    changePage(.3, rootWidth * index)
			                    changePoint()
			                }, 500)
							
			            }, config.time)
			        }
					
			        //更改索引 实现无缝滑屏
			        function changeIndex() {
			            if (index == 0) {
			                //当显示第一张图片 切换到下一组的第一张
			                index = points.length
			            } else if (index == lis.length - 1) {
			                //当显示最后一张 切换到上一组的最后一张
			                index = points.length - 1
			            }
			        }
					
			        //设置小圆点
			        function changePoint() {
			            for (var i = 0 ;i < points.length;i++) {
			                points[i].classList.remove('active')
			            }
			            points[index % (points.length)].classList.add('active')
			        }
					
			        //滑动页面 平移list
			        function changePage(duration, translateVal) {
			            list.style.transition = duration + "s"
			            list.style.transform = "translateX(" + translateVal + "px)"
			            list.style.webkitTransform = "translateX(" + translateVal + "px)"
			        }
					
			        //初始化list和point
			        function init() {
			            //添加一组
			            if(document.body.insertAdjacentHTML){
			            	list.insertAdjacentHTML('beforeend',list.innerHTML);
			            }else{
			            	list.innerHTML += list.innerHTML
			            }
			
			            //设置list宽度
			            lis = list.children
			            list.style.width = lis.length + "00%"
			
			            //设置li宽度
			            for (var i = 0; i < lis.length; i++) {
			                lis[i].style.width = 100 / lis.length + "%"
			            }
			
			            //创建point div
			            var pointDiv = document.createElement("div")
			            pointDiv.setAttribute("id", "point")
			            for (var i = 0; i < lis.length / 2; i++) {
			                var span = document.createElement("span")
			                if (i == 0) {
			                    span.classList.add('active')
			                }
			                pointDiv.appendChild(span)
			            }
			            banner.appendChild(pointDiv)
			            points = banner.querySelectorAll('#point span')
			        }
				}
				
				/**
				 * 入口 
				 */
				function main(e,config){
					if(!config){
						var config = {
							time: 10*1000
						}
					}
					config.self = this
					cors(e,config)
				}
				
				var result = {
					on: function(key,param){
						this[key]= param
					},
					gap: function(){},
					bind: main
				}
				
				return result
			}
			
		}
		return _init
	})()
})()
