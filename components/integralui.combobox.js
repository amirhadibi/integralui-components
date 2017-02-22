var __extends=this&&this.__extends||function(e,b){function a(){this.constructor=e}for(var d in b)b.hasOwnProperty(d)&&(e[d]=b[d]);e.prototype=null===b?Object.create(b):(a.prototype=b.prototype,new a)},__decorate=this&&this.__decorate||function(e,b,a,d){var c=arguments.length,f=3>c?b:null===d?d=Object.getOwnPropertyDescriptor(b,a):d,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)f=Reflect.decorate(e,b,a,d);else for(var h=e.length-1;0<=h;h--)if(g=e[h])f=(3>c?g(f):3<c?g(b,a,f):
g(b,a))||f;return 3<c&&f&&Object.defineProperty(b,a,f),f},__metadata=this&&this.__metadata||function(e,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,b)},core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),IntegralUIComboBox=function(e){function b(a,b){e.call(this,a);this.commonService=a;this.cmpResolver=b;this.eventList=[];this.expandState="none";
this.initStatus=!0;this.supressCallback=this.isSelected=this.isExpanded=!1;this.contentBorder="0px";this.contentHeight="0";this.contentDisplay="block";this.contentOpacity=1;this.contentOverflowY="hidden";this.maxBlockHeight=0;this.itemSizeList=[];this.itemContentClassName=this.itemGeneralClassName=this.headerExpandBoxClassName=this.headerClassName=this.contentClassName="";this.contentClass=[];this.trialRef=null;this.click=new core_1.EventEmitter;this.dropDownClosed=new core_1.EventEmitter;this.dropDownClosing=
new core_1.EventEmitter;this.dropDownOpened=new core_1.EventEmitter;this.dropDownOpening=new core_1.EventEmitter;this.selectedItemChanged=new core_1.EventEmitter;this.selectedIndexChanged=new core_1.EventEmitter;this.itemList=[];this.integralHeight=!1;this.maxDropDownItems=5;this.listSize={width:0,height:0};this.itemSizeList=[]}__extends(b,e);Object.defineProperty(b.prototype,"dropDownWidth",{get:function(){return this.listSize.width},set:function(a){this.listSize.width!=a&&(!this.comboWidth||a>=
this.comboWidth?this.listSize.width=a:this.comboWidth&&(this.listSize.width=this.comboWidth))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"expanded",{get:function(){return this.isExpanded},set:function(a){if(this.isExpanded!=a){var b=this;if(b.callBeforeEvent(a)){b.expandState=a?"expand":"collapse";var c=setTimeout(function(){"collapse"==b.expandState&&(b.expandState="none");clearTimeout(c)},300);b.isExpanded=a;b.header.state=a?b.header.state|integralui_core_1.IntegralUIObjectState.selected:
b.header.state&~integralui_core_1.IntegralUIObjectState.selected;b.header.animationState=b.isExpanded?"expand":"collapse";b.updateContentClass();b.toggleContent()}}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"selectedIndex",{get:function(){return this.currentIndex},set:function(a){this.updateSelection(a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"selectedItem",{get:function(){return this.currentSelection},set:function(a){this.currentSelection!=a&&(a=
this.items?this.items.indexOf(a):-1,this.updateSelection(a))},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.generalClassName="iui-combobox";this.headerClassName=this.generalClassName+"-header";this.headerExpandBoxClassName=this.headerClassName+"-expand-box";this.contentClassName=this.generalClassName+"-dropdown";this.itemGeneralClassName=this.generalClassName+"-item";this.itemContentClassName=this.itemGeneralClassName+"-content";this.defaultStyle={general:{disabled:this.generalClassName+
"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},header:{general:{disabled:this.headerClassName+"-disabled",focused:this.headerClassName+"-focused",normal:this.headerClassName,hovered:this.headerClassName+"-hovered",selected:this.headerClassName+"-selected"},expandBox:this.headerExpandBoxClassName},content:{general:this.contentClassName,expanded:this.contentClassName+"-expand",collapsed:this.contentClassName+
"-collapse"},item:{general:{disabled:this.itemGeneralClassName+"-disabled",focused:this.itemGeneralClassName+"-focused",normal:this.itemGeneralClassName,hovered:this.itemGeneralClassName+"-hovered",selected:this.itemGeneralClassName+"-selected"},content:{disabled:this.itemContentClassName+"-disabled",focused:this.itemContentClassName+"-focused",normal:this.itemContentClassName,hovered:this.itemContentClassName+"-hovered",selected:this.itemContentClassName+"-selected"}}};this.updateStyle(this.controlStyle);
this.updateControlClass();this.updateContentClass()};b.prototype.ngAfterViewInit=function(){var a=this,b=setTimeout(function(){var d=a.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUITComponent);d&&a.headerRef&&(a.trialRef=a.headerRef.createComponent(d));clearTimeout(b)},100);a.headerElem&&(a.comboWidth=a.headerElem.nativeElement.firstChild.clientWidth,a.dropDownWidth<a.comboWidth&&(a.dropDownWidth=a.comboWidth))};b.prototype.ngAfterContentInit=function(){var a=this;a.attachItemEvents();
a.contentList.changes.subscribe(function(){a.attachItemEvents()});a.updateSelectedIndex(a.selectedIndex);var b=setTimeout(function(){a.calcBlockHeight();a.contentDisplay="none";a.contentHeight="0";a.expandState="none";clearTimeout(b)},100)};b.prototype.ngOnDestroy=function(){this.trialRef&&this.trialRef.destroy()};b.prototype.attachItemEvents=function(){var a=this;this.itemList=this.contentList.toArray();a.eventList&&(a.eventList.forEach(function(a){a.forEach(function(a){a.unsubscribe()})}),a.eventList.length=
0);this.itemList&&0<this.itemList.length&&this.itemList.forEach(function(b){var d=[];d.push(b.mouseDown.subscribe(function(d){d=a.itemList.indexOf(b);a.updateSelection(d);a.closeDropDown()}));a.eventList.push(d)})};b.prototype.comboClick=function(a){1==a.buttons&&(this.initStatus=!1,this.expanded?this.closeDropDown():this.openDropDown())};b.prototype.dropDownBlurEvent=function(a){a.preventDefault();var b=this,c=setTimeout(function(){b.closeDropDown();clearTimeout(c)},1);a.stopPropagation()};b.prototype.callBeforeEvent=
function(a){var b={cancel:!1};a?this.dropDownOpening.emit(b):this.dropDownClosing.emit(b);return!b.cancel};b.prototype.callAfterEvent=function(a){a?this.dropDownOpened.emit(null):this.dropDownClosed.emit(null)};b.prototype.closeDropDown=function(){this.expanded=!1;this.dropDownElem&&this.dropDownElem.nativeElement.blur()};b.prototype.openDropDown=function(){var a=this;a.expanded=!0;var b=setTimeout(function(){a.dropDownElem&&a.dropDownElem.nativeElement.focus();clearTimeout(b)},5)};b.prototype.getComboIcon=
function(){return this.selectedItem?this.selectedItem.icon:""};b.prototype.getComboText=function(){return this.selectedItem?this.selectedItem.text:"TEST"};b.prototype.isIndexInRange=function(a){return this.items?0<=a&&a<this.items.length:!1};b.prototype.getDropDownWidth=function(){return 0<this.dropDownWidth?this.dropDownWidth:this.comboWidth?this.comboWidth:0};b.prototype.calcBlockHeight=function(){var a=this;a.itemSizeList.length=0;a.itemList=a.contentList.toArray();if(a.itemList&&0<a.itemList.length){var b=
0;a.itemList.forEach(function(d){var c=d.getSize();d=d.getMargin();a.itemSizeList.push({size:c,margin:d});b++})}};b.prototype.getDropDownHeight=function(){var a=this;if(0<a.dropDownHeight)return a.dropDownHeight;var b=0,c=0;a.itemList=a.contentList.toArray();if(a.itemList&&0<a.itemList.length){var f=0,e=-1,h=!1;a.itemList.forEach(function(d,g){g<a.itemSizeList.length&&(f<a.maxDropDownItems&&(b+=a.itemSizeList[g].size.height,!h&&a.itemSizeList[g].size.height!=e&&0<e&&(h=!0),e=a.itemSizeList[g].size.height,
c=a.itemSizeList[g].margin.bottom),f++)});0<f&&(b+=c);a.integralHeight||(b=Math.floor(b/(f<a.maxDropDownItems?f:a.maxDropDownItems))*(h?a.maxDropDownItems+1:a.maxDropDownItems))}return b};b.prototype.toggleContent=function(){var a=this,b=0,c=0;a.maxBlockHeight=a.getDropDownHeight();a.contentOverflowY="hidden";if(a.expanded){a.contentDisplay="block";a.contentBorder="1px";var e=setInterval(function(){b+c<a.maxBlockHeight?(c=0==c?1:c+2,b+=c,a.contentHeight=b+"px"):(a.contentHeight=a.maxBlockHeight+"px",
a.contentOverflowY="auto",a.expandState="none",a.callAfterEvent(!0),clearInterval(e))},15)}else var b=a.maxBlockHeight,g=setInterval(function(){0<b?(c=0==c?1:c+2,b-=c,a.contentHeight=b+"px"):(a.contentBorder="0px",a.contentDisplay="none",a.contentHeight="0",a.expandState="none",a.callAfterEvent(),clearInterval(g))},15)};b.prototype.clearSelection=function(a){this.itemList=this.contentList.toArray();this.itemList.forEach(function(b,c){b!=a&&(b.state&=~integralui_core_1.IntegralUIObjectState.selected)})};
b.prototype.updateSelectedIndex=function(a){this.isIndexInRange(a)&&(this.currentSelection=this.items[a],this.selectedItemChanged.emit({item:this.currentSelection}),this.contentList&&(this.itemList=this.contentList.toArray())&&a<this.itemList.length&&(this.itemList[a].state|=integralui_core_1.IntegralUIObjectState.selected))};b.prototype.updateSelection=function(a){if(this.currentIndex!=a&&this.isIndexInRange(a)){this.currentIndex=a;var b=this,c=setTimeout(function(){b.clearSelection();b.updateSelectedIndex(a);
b.selectedIndexChanged.emit({index:a});clearTimeout(c)},1)}};b.prototype.updateContentClass=function(){this.contentClass.length=0;this.contentClass.push(this.options.currentStyle.content.general);0!=this.expanded?"expand"==this.expandState&&this.contentClass.push(this.options.currentStyle.content.expanded):"collapse"==this.expandState&&this.contentClass.push(this.options.currentStyle.content.collapsed)};b.prototype.getContentClass=function(){return this.contentClass};b.prototype.getContentStyle=function(a){return this.commonService.isString(a)?
a:a?{general:this.commonService.isFieldAvailable(a.general,this.contentClassName),expanded:this.commonService.isFieldAvailable(a.expanded,this.contentClassName+"-expand"),collapsed:this.commonService.isFieldAvailable(a.collapsed,this.contentClassName+"-collapse")}:{general:this.defaultStyle.content.general,expanded:this.defaultStyle.content.expanded,collapsed:this.defaultStyle.content.collapsed}};b.prototype.getHeaderClass=function(){var a=this.headerClassName;return a=this.state&integralui_core_1.IntegralUIObjectState.disabled?
a+(" "+this.options.currentStyle.header.disabled):this.state&integralui_core_1.IntegralUIObjectState.focused?a+(" "+this.options.currentStyle.header.focused):this.state&integralui_core_1.IntegralUIObjectState.selected?a+(" "+this.options.currentStyle.header.selected):this.state&integralui_core_1.IntegralUIObjectState.hovered?a+(" "+this.options.currentStyle.header.hovered):a+(" "+this.options.currentStyle.header.normal)};b.prototype.getHeaderGeneralStyle=function(a){return this.commonService.isString(a)?
a:a?{disabled:this.commonService.isFieldAvailable(a.hovered,this.headerClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.hovered,this.headerClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.headerClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.headerClassName),selected:this.commonService.isFieldAvailable(a.selected,this.headerClassName+"-selected")}:{disabled:this.defaultStyle.header.disabled,focused:this.defaultStyle.header.focused,
hovered:this.defaultStyle.header.hovered,normal:this.defaultStyle.header.normal,selected:this.defaultStyle.header.selected}};b.prototype.getHeaderStyle=function(a){return{general:this.getHeaderGeneralStyle(a.general),expandBox:this.commonService.isFieldAvailable(a.expandBox,this.headerExpandBoxClassName)}};b.prototype.getCurrentHeaderStyle=function(){return this.options.currentStyle.header};b.prototype.getItemStyle=function(a){return{general:this.getItemGeneralStyle(a.general),content:this.getItemContentStyle(a.content)}};
b.prototype.getItemGeneralStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.itemGeneralClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.itemGeneralClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.itemGeneralClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.itemGeneralClassName),selected:this.commonService.isFieldAvailable(a.selected,
this.itemGeneralClassName+"-selected")}:{disabled:this.defaultStyle.item.general.disabled,focused:this.defaultStyle.item.general.focused,hovered:this.defaultStyle.item.general.hovered,normal:this.defaultStyle.item.general.normal,selected:this.defaultStyle.item.general.selected}};b.prototype.getItemContentStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.itemContentClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,
this.itemContentClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.itemContentClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.itemContentClassName),selected:this.commonService.isFieldAvailable(a.selected,this.itemContentClassName+"-selected")}:{disabled:this.defaultStyle.item.content.disabled,focused:this.defaultStyle.item.content.focused,hovered:this.defaultStyle.item.content.hovered,normal:this.defaultStyle.item.content.normal,selected:this.defaultStyle.item.content.selected}};
b.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),header:this.getHeaderStyle(a.header),content:this.getContentStyle(a.content),item:this.getItemStyle(a.content)}:{general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},header:{general:{disabled:this.defaultStyle.header.general.disabled,
focused:this.defaultStyle.header.general.focused,hovered:this.defaultStyle.header.general.hovered,normal:this.defaultStyle.header.general.normal,selected:this.defaultStyle.header.general.selected},expandBox:this.defaultStyle.header.expandBox},content:{general:this.defaultStyle.content.general,expanded:this.defaultStyle.content.expanded,collapsed:this.defaultStyle.content.collapsed},item:{general:{disabled:this.defaultStyle.item.general.disabled,focused:this.defaultStyle.item.general.focused,hovered:this.defaultStyle.item.general.hovered,
normal:this.defaultStyle.item.general.normal,selected:this.defaultStyle.item.general.selected},content:{disabled:this.defaultStyle.item.content.disabled,focused:this.defaultStyle.item.content.focused,hovered:this.defaultStyle.item.content.hovered,normal:this.defaultStyle.item.content.normal,selected:this.defaultStyle.item.content.selected}}}};__decorate([core_1.ViewChild("control",{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],b.prototype,"controlElem",void 0);__decorate([core_1.ViewChild("header"),
__metadata("design:type",integralui_core_1.IntegralUIHeaderItem)],b.prototype,"header",void 0);__decorate([core_1.ViewChild("header",{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],b.prototype,"headerElem",void 0);__decorate([core_1.ViewChild("header",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],b.prototype,"headerRef",void 0);__decorate([core_1.ViewChild("dropdown",{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],
b.prototype,"dropDownElem",void 0);__decorate([core_1.ContentChildren(integralui_core_1.IntegralUIItem),__metadata("design:type",core_1.QueryList)],b.prototype,"contentList",void 0);__decorate([core_1.Input(),__metadata("design:type",Number)],b.prototype,"dropDownHeight",void 0);__decorate([core_1.Input(),__metadata("design:type",Boolean)],b.prototype,"integralHeight",void 0);__decorate([core_1.Input(),__metadata("design:type",Array)],b.prototype,"items",void 0);__decorate([core_1.Input(),__metadata("design:type",
Object)],b.prototype,"maxDropDownItems",void 0);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],b.prototype,"dropDownWidth",null);__decorate([core_1.Input(),__metadata("design:type",Boolean),__metadata("design:paramtypes",[Boolean])],b.prototype,"expanded",null);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],b.prototype,"selectedIndex",null);__decorate([core_1.Input(),__metadata("design:type",
Object),__metadata("design:paramtypes",[Object])],b.prototype,"selectedItem",null);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"click",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"dropDownClosed",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"dropDownClosing",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"dropDownOpened",
void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"dropDownOpening",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"selectedItemChanged",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"selectedIndexChanged",void 0);return b=__decorate([core_1.Component({selector:"iui-combobox",template:'\n\t\t<div [ngClass]="getControlClass()" #control>\n\t\t\t<iui-header [controlStyle]="getCurrentHeaderStyle()" [icon]="getComboIcon()" [text]="getComboText()" (mouseDown)="comboClick($event)" [animationType]="\'arrow\'" #header>\n\t\t\t</iui-header>\n\t\t\t<div [ngClass]="getContentClass()" [ngStyle]="{ \'border-width\': contentBorder, \'display\': contentDisplay, \'height\': contentHeight, \'opacity\': contentOpacity, \'overflow-y\': contentOverflowY, \'width\': getDropDownWidth() + \'px\' }" tabindex="999" (blur)="dropDownBlurEvent($event)" #dropdown> \n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div> \n\t\t</div>   \n\t',
inputs:["controlStyle","data","state"],encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[integralui_common_service_1.IntegralUICommonService,core_1.ComponentFactoryResolver])],b)}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUIComboBox=IntegralUIComboBox;