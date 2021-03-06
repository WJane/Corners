/**
 * @description
 *  A jquery plugin to generate diverse corner effects
 * @author Jane Wu
 * @createDate 2016.8.12
 * @version V0.0.1
 */
;(function($) {
    $.fn.jCorners = function(options){
        var extents = '15px';
		var defaults = '3';
		var angle = '20';
        var corner_style = 'beveled';
        var settings = $.extend({
            'style':corner_style,
            'extent':extents,
            'size':defaults,
            'angle':angle
            },options);

        return this.each(function(){
            var bg = $(this).css('background-color'),tl,tr,br,bl,width,height,translate,rotate,pb;
            
            if(settings.style == 'scoop'){
                tl = 'radial-gradient(circle at top left, transparent '+ settings.extent+','+bg+ ' 0) top left,';
                tr = 'radial-gradient(circle at top right, transparent '+ settings.extent+','+bg+ ' 0) top right,';
                br = 'radial-gradient(circle at bottom right, transparent '+ settings.extent+','+bg+ ' 0) bottom right,';
                bl = 'radial-gradient(circle at bottom left, transparent '+ settings.extent+','+bg+ ' 0) bottom left';
            	$(this).css('background',tl+tr+br+bl);
            	$(this).css('background-repeat','no-repeat'); 
            	$(this).css('background-size','50% 50%');
			}else if(settings.style == 'beveled'){
                tl = 'linear-gradient(135deg, transparent '+ settings.extent+','+bg+ ' 0) top left,';
                tr = 'linear-gradient(-135deg, transparent '+ settings.extent+','+bg+ ' 0) top right,';
                br = 'linear-gradient(-45deg, transparent '+ settings.extent+','+bg+ ' 0) bottom right,';
                bl = 'linear-gradient(45deg, transparent '+ settings.extent+','+bg+ ' 0) bottom left';
				$(this).css('background',tl+tr+br+bl);
				$(this).css('background-repeat','no-repeat'); 
            	$(this).css('background-size','50% 50%');
         	}else if(settings.style == 'folded'){
         		width = settings.size/Math.cos(settings.angle*Math.PI/180);
            	height = settings.size/Math.sin(settings.angle*Math.PI/180);
            	translate = width - height;
            	rotate = 2*settings.angle-90;
            	pb = settings.angle - 180;
				$(this).css('position','relative');
				$(this).css('background','linear-gradient('+pb+'deg,transparent '+settings.size+'em,'+bg+' 0)');
				var folded = "content: '';"+
					"position: absolute;"+
					"top: 0;"+
					"right: 0;"+
					"background: linear-gradient(to left bottom,transparent 50%, rgba(0,0,0,0.2) 0,rgba(0,0,0,0.4)) 100% 0 no-repeat;"+
					"width:"+ width+"em;"+
					"height:"+ height+"em;"+
					"transform: translateY("+translate+"em) rotate("+rotate+"deg);"+
					"transform-origin: bottom right;";
				var self = '#'+$(this).attr('id')||'.'+$(this).attr('class');				
				$('<style>'+self +'::before{'+folded+'}</style>').appendTo($('head'));
         	}
		
        });
    }
    
}(jQuery));
