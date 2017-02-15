/*
  filename: integralui.base.list.js
  version : 0.7.524 BETA
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/iui-web-license-agreement.pdf.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(f,b){function a(){this.constructor=f}for(var c in b)b.hasOwnProperty(c)&&(f[c]=b[c]);f.prototype=null===b?Object.create(b):(a.prototype=b.prototype,new a)},__decorate=this&&this.__decorate||function(f,b,a,c){var d=arguments.length,e=3>d?b:null===c?c=Object.getOwnPropertyDescriptor(b,a):c,k;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)e=Reflect.decorate(f,b,a,c);else for(var g=f.length-1;0<=g;g--)if(k=f[g])e=(3>d?k(e):3<d?k(b,a,e):
k(b,a))||e;return 3<d&&e&&Object.defineProperty(b,a,e),e},__metadata=this&&this.__metadata||function(f,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(f,b)},core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),integralui_dragdrop_service_1=require("../services/integralui.dragdrop.service"),
IntegralUIBaseList=function(f){function b(a,c,b,e,k,g){f.call(this,k);this.dataService=a;this.dragDropService=c;this.elemRef=b;this.elemRenderer=e;this.commonService=k;this.cmpResolver=g;this.currentList=[];this.options={allowDrag:!0,allowDrop:!0,dataFields:null,selectedItem:null};this.cloneElem=this.dragCmp=this.dragCmpRef=this.dropMarkElem=null;this.cloneElemStartPos={x:0,y:0};this.currentSelectionMode=integralui_core_1.IntegralUISelectionMode.One;this.removeIndex=-1;this.currentSelectedItems=[];
this.afterSelect=new core_1.EventEmitter;this.beforeSelect=new core_1.EventEmitter;this.clear=new core_1.EventEmitter;this.dragDrop=new core_1.EventEmitter;this.dragOver=new core_1.EventEmitter;this.itemAdding=new core_1.EventEmitter;this.itemAdded=new core_1.EventEmitter;this.itemRemoving=new core_1.EventEmitter;this.itemRemoved=new core_1.EventEmitter;this.selectionChanged=new core_1.EventEmitter;this.updateOptions()}__extends(b,f);Object.defineProperty(b.prototype,"selectedItem",{get:function(){return this.currentSelection},
set:function(a){this.currentSelection!=a&&this.processSelection(null,a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"selectionMode",{get:function(){return this.currentSelectionMode},set:function(a){this.currentSelectionMode!=a&&(this.currentSelectionMode=a,this.updateLayout())},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.dataService.init([{data:this.items}])};b.prototype.addItem=function(a,c){this.callEventAdd("add",a,c)};b.prototype.clearItems=function(a){this.dataService.clear(a);
this.clear.emit({parent:a})};b.prototype.insertItemAt=function(a,c,b){this.callEventAdd("at",a,c,b)};b.prototype.insertItemBefore=function(a,c){this.callEventAdd("ref",a,-1,null,c)};b.prototype.insertItemAfter=function(a,c){this.callEventAdd("ref",a,-1,null,c,!0)};b.prototype.removeItem=function(a){return this.callEventRemove(a)};b.prototype.removeItemAt=function(a,c){return this.callEventRemove(null,a,c)};b.prototype.callEventAdd=function(a,c,b,e,k,g){var d={cancel:!1,item:c};this.itemAdding.emit(d);
if(1!=d.cancel){switch(a){case "at":this.dataService.insert(c,b,e);break;case "ref":this.dataService.insertByRef(c,k,g);break;default:this.dataService.insert(c,-1,e)}this.itemAdded.emit({item:c})}};b.prototype.callEventRemove=function(a,c,b){var d={cancel:!1,item:a};this.itemRemoving.emit(d);return 1!=d.cancel&&(this.removeIndex=this.items?this.items.indexOf(a):-1,a=this.dataService.removeAt(a,c,b),a.result)?(this.itemRemoved.emit({item:a.obj}),!0):!1};b.prototype.updateOptions=function(a){a?this.options=
{allowDrag:this.commonService.isFieldAvailable(a.allowDrag,!1),allowDrop:this.commonService.isFieldAvailable(a.allowDrop,!0),dataFields:null,selectedItem:this.commonService.isFieldAvailable(a.selectedItem,this.options.selectedItem?this.options.selectedItem:null)}:(this.options={allowDrag:!0,allowDrop:!0,dataFields:null,selectedItem:null},this.updateDataFields())};b.prototype.updateDataFields=function(a){this.options.dataFields=a?{allowDrag:a.allowDrag?a.allowDrag:"allowDrag",allowDrop:a.allowDrop?
a.allowDrop:"allowDrop",allowEdit:a.allowEdit?a.allowEdit:"allowEdit",allowFocus:a.allowFocus?a.allowFocus:"allowFocus",autoCheck:a.autoCheck?a.autoCheck:"autoCheck",checkBoxSettings:a.checkBoxSettings?a.checkBoxSettings:"checkBoxSettings",checked:a.checked?a.checked:"checked",checkState:a.checkState?a.checkState:"checkState",content:a.content?a.content:"content",contextMenu:a.contextMenu?a.contextMenu:"contextMenu",enabled:a.enabled?a.enabled:"enabled",expanded:a.expanded?a.expanded:"expanded",hasChildren:a.hasChildren?
a.hasChildren:"hasChildren",icon:a.icon?a.icon:"icon",id:a.id?a.id:"id",items:a.items?a.items:"items",pid:a.pid?a.pid:"pid",selected:a.selected?a.selected:"selected",statusIcon:a.statusIcon?a.statusIcon:"statusIcon",style:a.style?a.style:"style",templateObj:a.templateObj?a.templateObj:"templateObj",text:a.text?a.text:"text",tooltip:a.tooltip?a.tooltip:"tooltip",value:a.value?a.value:"value"}:{allowDrag:"allowDrag",allowDrop:"allowDrop",allowEdit:"allowEdit",allowFocus:"allowFocus",autoCheck:"autoCheck",
checkBoxSettings:"checkBoxSettings",checked:"checked",checkState:"checkState",content:"content",contextMenu:"contextMenu",enabled:"enabled",expanded:"expanded",hasChildren:"hasChildren",icon:"icon",id:"id",items:"items",pid:"pid",selected:"selected",statusIcon:"statusIcon",style:"style",templateObj:"templateObj",text:"text",tooltip:"tooltip",value:"value"}};b.prototype.addDropMark=function(a){this.appRef&&(this.dragCmpRef&&(this.dragCmpRef.destroy(),this.dragCmp=null),a=this.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUIDragWindow))&&
(this.dragCmpRef=this.appRef.createComponent(a),this.dragCmpRef._component?this.dragCmp=this.dragCmpRef._component:this.dragCmpRef._hostElement&&(this.dragCmp=this.dragCmpRef._hostElement.component))};b.prototype.callDragDropEvent=function(a,c,b){a={action:c.action,cancel:!1,dragItem:c.source,dropPos:c.dropPos,event:a,isDropAllowed:c.allow,mousePos:this.commonService.getMousePos(a),sourceCtrl:c.sourceCtrl,targetCtrl:c.targetCtrl,targetItem:c.target};b?this.dragDrop.emit(a):this.dragOver.emit(a);return a.cancel};
b.prototype.checkEmptySpace=function(a){var c=this.getContentSize(),b=this.commonService.getPageRect(this.elemRef.nativeElement.firstElementChild),c=b.top+c.height,b=b.bottom;a=this.commonService.getMousePos(a);var e=this.commonService.getShiftPos();a.x-=e.x;a.y-=e.y;return a.y>=c&&a.y<=b};b.prototype.ctrlDragDrop=function(a){this.processDragDrop(a);a.stopPropagation()};b.prototype.ctrlDragLeave=function(a){this.dropMark()};b.prototype.ctrlDragOver=function(a){this.processDragOver(a);a.stopPropagation()};
b.prototype.dropMark=function(a){if(this.dragCmp){var c="none";this.options.allowDrop&&(c=a?"block":"none");this.dragCmp.display=c}};b.prototype.updateDragComponent=function(a){this.dragCmp&&this.dragCmp.updatePos(a)};b.prototype.isDragAllowed=function(a){return this.options.allowDrag?a&&(a[this.options.dataFields.allowDrag]||void 0===a[this.options.dataFields.allowDrag])?!0:!1:!1};b.prototype.isDropAllowed=function(a,c,b){var d=this.options.allowDrop;if(d&&a&&c&&(d=c[this.options.dataFields.allowDrop]||
void 0===c[this.options.dataFields.allowDrop]?!0:!1))if(Array.isArray(a))for(var k=0;k<a.length;k++){if(this.commonService.isEqual(a[k][this.options.dataFields.id],c[this.options.dataFields.id])||0===b&&this.isParentOf(c,a[k])||this.isChildOf(c,a[k])){d=!1;break}if(!d)break}else if(this.commonService.isEqual(a[this.options.dataFields.id],c[this.options.dataFields.id])||0===b&&this.isParentOf(c,a)||this.isChildOf(c,a))d=!1;return d};b.prototype.processDragStart=function(a,c){this.dragDropService.clearData();
if(c)if(this.isDragAllowed(c)){this.addDropMark({x:a.pageX,y:a.pageY});a.dataTransfer?(a.dataTransfer.effectAllowed="move",a.dataTransfer.setData("text",c[this.options.dataFields.id]?c[this.options.dataFields.id].toString():"")):a.originalEvent&&a.originalEvent.dataTransfer&&(a.originalEvent.dataTransfer.effectAllowed="move",a.originalEvent.dataTransfer.setData("text",c[this.options.dataFields.id]?c[this.options.dataFields.id].toString():""));var b={clone:this.cloneItem(c),source:c,sourceCtrl:this,
sourceData:this.items};this.dragDropService.setData(b)}else a.dataTransfer?a.dataTransfer.effectAllowed="none":a.originalEvent&&a.originalEvent.dataTransfer&&(a.originalEvent.dataTransfer.effectAllowed="none")};b.prototype.processDragOver=function(a,c,b,e){a.preventDefault();var d=!0;a.dataTransfer?d="none"===a.dataTransfer.effectAllowed?!1:!0:a.originalEvent&&a.originalEvent.dataTransfer&&(d="none"===a.originalEvent.dataTransfer.effectAllowed?!1:!0);if(d){var g=this.dragDropService.getData(),d=this.commonService.getShiftPos();
if(c){var h=this.commonService.getMousePos(a);h.x-=d.x;h.y-=d.y;h=this.dragDropService.getDropPos(h,b,e);d=this.isDropAllowed(g.source,c,h);b={action:a.shiftKey?"copy":"move",source:g.source,dropPos:h,allow:d,sourceCtrl:g.sourceCtrl,target:c,targetCtrl:this};b=this.callDragDropEvent(a,b);if(d&&1!=b){e=this.commonService.getMousePos(a);b=e.y+16;e=e.x+20;var f="iui-dragwin-icon";switch(h){case 0:f+=" iui-dragwin-move-in";break;case 1:f+=" iui-dragwin-move-up";break;case 2:f+=" iui-dragwin-move-down"}a.shiftKey&&
(f+="-copy");this.updateDragComponent({"class":f,top:b,left:e,text:c[this.options.dataFields.text]});this.dropMark(d);this.dragDropService.setData({action:a.shiftKey?"copy":"move",source:g.source,sourceData:g.sourceData,target:c,targetCtrl:this,dropPos:h})}else a.dataTransfer?a.dataTransfer.dropEffect="none":a.originalEvent&&a.originalEvent.dataTransfer&&(a.originalEvent.dataTransfer.dropEffect="none"),this.dropMark()}else d=this.checkEmptySpace(a),b={action:a.shiftKey?"copy":"move",source:g.source,
dropPos:-1,allow:d,sourceCtrl:g.sourceCtrl,target:null,targetCtrl:this},b=this.callDragDropEvent(a,b),d&&1!=b?(h=this.commonService.getMousePos(a),b=h.y+16,e=h.x+20,f="iui-dragwin-icon iui-dragwin-move-end",a.shiftKey&&(f+="-copy"),this.updateDragComponent({"class":f,top:b,left:e,text:"TreeView"}),this.dropMark(d),this.dragDropService.setData({action:a.shiftKey?"copy":"move",source:g.source,sourceData:g.sourceData,target:null,targetCtrl:this,dropPos:-1})):(a.dataTransfer?a.dataTransfer.dropEffect=
"none":a.originalEvent&&a.originalEvent.dataTransfer&&(a.originalEvent.dataTransfer.dropEffect="none"),this.dropMark())}};b.prototype.processDragDrop=function(a,c){a.preventDefault();this.dropMark();var b=!0;a.dataTransfer?b="none"===a.dataTransfer.effectAllowed?!1:!0:a.originalEvent&&a.originalEvent.dataTransfer&&(b="none"===a.originalEvent.dataTransfer.effectAllowed?!1:!0);if(b){var e=this.dragDropService.getData();(b=c?this.isDropAllowed(e.source,c,e.dropPos):this.checkEmptySpace(a))&&e.source&&
(this.callDragDropEvent(a,{action:a.shiftKey?"copy":"move",source:e.source,dropPos:e.dropPos,allow:b,sourceCtrl:e.sourceCtrl,target:e.target,targetCtrl:this},!0)||this.drop(a,e))}this.dragDropService.clearData()};b.prototype.drop=function(a,c){c&&c.sourceCtrl&&this.processDataDrop(a,c.source,c)};b.prototype.processDataDrop=function(a,c,b){var d=a.shiftKey;!a.shiftKey&&b.sourceCtrl&&b.sourceCtrl.removeItem&&(d=b.sourceCtrl.removeItem(c));if(d)switch(a=a.shiftKey&&b.clone?b.clone:c,b.dropPos){case 0:this.insertItemAt(a,
-1,b.target);break;case 1:this.insertItemBefore(a,b.target);break;case 2:this.insertItemAfter(a,b.target);break;default:this.addItem(a)}this.updateLayout()};b.prototype.callAfterSelectEvent=function(a){this.afterSelect.emit({item:a});this.selectionChanged.emit(null)};b.prototype.cloneItem=function(a){return this.dataService.clone(a)};b.prototype.getItemCurrentIndex=function(a){return a&&this.currentList?this.currentList.indexOf(a):-1};b.prototype.getItemFromComponent=function(a){return null};b.prototype.invokeMethod=
function(a,c){if(c)switch(a){case "SELECT_ITEM":this.processSelection(c.event,c.item);break;case "UPDATE_SELECTION":this.updateSelection(c.event,c.item)}return!0};b.prototype.isChildOf=function(a,c){return!1};b.prototype.isComponentIndexInRange=function(a){return this.itemList?0<=a&&a<this.itemList.length:!1};b.prototype.isIndexInRange=function(a){return this.currentList?0<=a&&a<this.currentList.length:!1};b.prototype.isItemAllowed=function(a){return!0};b.prototype.isItemEnabled=function(a){return!0};
b.prototype.isParentOf=function(a,c){return!1};b.prototype.getContentSize=function(){return{width:0,height:0}};b.prototype.refresh=function(){this.clearComponentSelection();for(var a=0;a<this.currentSelectedItems.length;a++){var c=this.getItemCurrentIndex(this.currentSelectedItems[a]);this.isComponentIndexInRange(c)&&(this.itemList[c].state|=integralui_core_1.IntegralUIObjectState.selected)}};b.prototype.updateLayout=function(){};b.prototype.onWindowMouseMove=function(a){this.updateCloneElemPos(a)};
b.prototype.onWindowMouseUp=function(a){this.closeCloneElem()};b.prototype.updateCloneElemPos=function(a){1==a.buttons&&this.cloneElem&&(this.cloneElem.style.top=a.pageY-this.cloneElemStartPos.y+"px",this.cloneElem.style.left=a.pageX-this.cloneElemStartPos.x+"px")};b.prototype.onCtrlMouseEnter=function(a){1==a.buttons&&this.cloneElem&&(this.cloneElem.style.display="block");this.elemRenderer.setElementStyle(this.elemRef.nativeElement,"cursor","default")};b.prototype.onCtrlMouseLeave=function(a){1==
a.buttons&&this.cloneElem&&(this.cloneElem.style.display="none")};b.prototype.setCloneElem=function(a,c){this.cloneElem&&this.closeCloneElem();this.cloneElem=a;this.cloneElemStartPos=c};b.prototype.appendCloneElem=function(){document.body.appendChild(this.cloneElem)};b.prototype.closeCloneElem=function(){var a=this;a.elemRenderer.setElementStyle(a.elemRef.nativeElement,"cursor","default");setTimeout(function(){a.cloneElem&&(document.body.removeChild(a.cloneElem),a.cloneElem=null)},10)};b.prototype.clearComponentSelection=
function(){this.itemList.forEach(function(a){return a.state&=~integralui_core_1.IntegralUIObjectState.selected})};b.prototype.clearPrevSelection=function(a){for(var c=0;c<this.currentSelectedItems.length;c++)a&&!this.commonService.isEqual(this.currentSelectedItems[c][this.options.dataFields.id],a[this.options.dataFields.id])?this.currentSelectedItems[c][this.options.dataFields.selected]=!1:a||(this.currentSelectedItems[c][this.options.dataFields.selected]=!1);this.currentSelectedItems.length=0;a&&
this.isItemEnabled(a)&&this.currentSelectedItems.push(a)};b.prototype.isItemInSelectionList=function(a){var c=!1,b=this.currentSelectedItems;if(a&&b)for(var e=0;e<b.length;e++)if(this.commonService.isEqual(b[e][this.options.dataFields.id],a[this.options.dataFields.id])){c=!0;break}return c};b.prototype.processSelection=function(a,b,d){if(b&&this.selectionMode!=integralui_core_1.IntegralUISelectionMode.None){var c=0<this.currentSelectedItems.length;if(this.isItemEnabled(b)){var f=this.currentSelection,
g=!0;f&&(g=a&&(a.ctrlKey||a.metaKey)||!this.commonService.isEqual(f[this.options.dataFields.id],b[this.options.dataFields.id])||0==f[this.options.dataFields.selected]);var h={cancel:!1,item:b};this.beforeSelect.emit(h);if(1!=h.cancel)if(h=a&&(a.shiftKey||a.ctrlKey||a.metaKey)?!0:!1,g){this.selectionMode==integralui_core_1.IntegralUISelectionMode.MultiExtended&&(g=!this.isItemInSelectionList(b)||!h||a&&a.shiftKey);g&&(this.selectionMode==integralui_core_1.IntegralUISelectionMode.One?this.clearPrevSelection():
a&&a.shiftKey?this.clearPrevSelection():h||this.selectionMode==integralui_core_1.IntegralUISelectionMode.MultiSimple||1!=this.currentSelectedItems.length&&this.isItemInSelectionList(b)||this.clearPrevSelection());this.currentSelection=b;if(a&&a.shiftKey&&this.selectionMode!=integralui_core_1.IntegralUISelectionMode.One){if(a=this.getItemCurrentIndex(f),d=this.getItemCurrentIndex(b),a>d&&(c=a,a=d,d=c),this.isIndexInRange(a)&&this.isIndexInRange(d))for(;a<=d;a++)this.currentList[a][this.options.dataFields.selected]=
!0,this.currentSelectedItems.push(this.currentList[a])}else h||this.selectionMode==integralui_core_1.IntegralUISelectionMode.MultiSimple?(a=null==b[this.options.dataFields.selected]||"undefined"==b[this.options.dataFields.selected]?!1:b[this.options.dataFields.selected],b[this.options.dataFields.selected]=!a,b[this.options.dataFields.selected]?this.isItemInSelectionList(b)||this.currentSelectedItems.push(b):this.currentSelectedItems=this.currentSelectedItems.filter(function(a){return a!=b})):(b[this.options.dataFields.selected]=
!0,this.isItemInSelectionList(b)||this.currentSelectedItems.push(b));this.callAfterSelectEvent(b);this.refresh()}else h||this.selectionMode==integralui_core_1.IntegralUISelectionMode.MultiSimple?(a=null===b[this.options.dataFields.selected]||"undefined"==b[this.options.dataFields.selected]?!1:b[this.options.dataFields.selected],d&&"undefined"!=d&&(a=d),b[this.options.dataFields.selected]=!a,b[this.options.dataFields.selected]?this.isItemInSelectionList(b)||this.currentSelectedItems.push(b):this.currentSelectedItems=
this.currentSelectedItems.filter(function(a){return a!=b}),this.callAfterSelectEvent(b),this.refresh()):h||this.selectionMode&integralui_core_1.IntegralUISelectionMode.MultiSimple||1!=this.currentSelectedItems.length&&this.isItemInSelectionList(b)||(this.clearPrevSelection(b),this.refresh(),c&&this.selectionChanged.emit(null))}else this.clearPrevSelection(),this.refresh(),c&&this.selectionChanged.emit(null)}};b.prototype.selectedItems=function(a){if(a&&Array.isArray(a)){for(var b=this.currentSelectedItems.length=
0;b<a.length;b++)a[b][this.options.dataFields.selected]=!0,this.currentSelectedItems.push(a[b]);0<a.length?(this.currentSelection=a[a.length-1],this.callAfterSelectEvent(this.currentSelection)):this.currentSelection=null;this.refresh()}};b.prototype.updateSelection=function(a,b){var c=a&&(a.shiftKey||a.ctrlKey||a.metaKey)?!0:!1;this.selectionMode==integralui_core_1.IntegralUISelectionMode.MultiExtended&&0<this.currentSelectedItems.length&&!a.shiftKey&&!c&&(this.clearPrevSelection(),b[this.options.dataFields.selected]=
!0,this.currentSelectedItems.push(b),this.callAfterSelectEvent(b),this.refresh())};__decorate([core_1.Input(),__metadata("design:type",Object)],b.prototype,"appRef",void 0);__decorate([core_1.Input(),__metadata("design:type",Array)],b.prototype,"items",void 0);__decorate([core_1.Input(),__metadata("design:type",Object),__metadata("design:paramtypes",[Object])],b.prototype,"selectedItem",null);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],b.prototype,
"selectionMode",null);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"afterSelect",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"beforeSelect",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"clear",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"dragDrop",void 0);__decorate([core_1.Output(),__metadata("design:type",
core_1.EventEmitter)],b.prototype,"dragOver",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"itemAdding",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"itemAdded",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"itemRemoving",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"itemRemoved",void 0);__decorate([core_1.Output(),
__metadata("design:type",core_1.EventEmitter)],b.prototype,"selectionChanged",void 0);__decorate([core_1.HostListener("document:mousemove",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],b.prototype,"onWindowMouseMove",null);__decorate([core_1.HostListener("document:mouseup",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],b.prototype,"onWindowMouseUp",
null);return b=__decorate([core_1.Component({selector:"iui-baselist",template:"",providers:[integralui_data_service_1.IntegralUIDataService]}),__metadata("design:paramtypes",[integralui_data_service_1.IntegralUIDataService,integralui_dragdrop_service_1.IntegralUIDragDropService,core_1.ElementRef,core_1.Renderer,integralui_common_service_1.IntegralUICommonService,core_1.ComponentFactoryResolver])],b)}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUIBaseList=IntegralUIBaseList;