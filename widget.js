(function(window, $, undefined){
	"use strict";
	var MyWidget = (function(){/* <-- Lo que vendría siendo mi clase */

		function MyWidget(){	/* <-- Lo que vendría siendo mi constructor */

			this.url = null;	/* <-- Propiedades siempre van aquí */

			MyWidget.prototype.init = function(url){
				this.url = url;
			};

			MyWidget.prototype.requestJSON = function(){
				var promise = this.url != "" ? $.getJSON(this.url) : "Error requestJSON";
				return promise;
			};

		}

		return MyWidget;/* <-- RETURN */

	})();

	var Exposed_obj = window.Exposed_obj || {};
	/* ========= Exponemos  ========= */
	if(typeof window.Exposed_obj === "undefined" ){
		window.Exposed_obj = Exposed_obj;
	}

	Exposed_obj.MyWidget = MyWidget;

})(window, jQuery);