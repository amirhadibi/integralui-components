/*
  filename: integralui.splitcontainer.js
  version : 1.2.0
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ComponentFactoryResolver, Directive, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService, IntegralUIOrientation, IntegralUITComponent } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
var IntegralUISplitContainerTags = (function () {
    function IntegralUISplitContainerTags() {
    }
    return IntegralUISplitContainerTags;
}());
export { IntegralUISplitContainerTags };
IntegralUISplitContainerTags.decorators = [
    { type: Directive, args: [{ selector: 'iui-panel1, iui-panel2' },] },
];
/** @nocollapse */
IntegralUISplitContainerTags.ctorParameters = function () { return []; };
var IntegralUISplitContainer = (function (_super) {
__extends(IntegralUISplitContainer,_super);
function IntegralUISplitContainer(a,c,d,e){var b=_super.call(this,c)||this;b.elemRef=a;b.commonService=c;b.cmpResolver=d;b.baseService=e;b.panel1Data={text:"Panel1"};b.panel2Data={text:"Panel2"};b.blockPos={top:"0",right:"auto",bottom:"auto",left:"0"};b.swap=!0;b.tabSize={width:0,height:0};b.maxPos={x:0,y:0};b.currentOrientation=IntegralUIOrientation.Horizontal;b.clientRect={width:0,height:0};b.currentSplitterDistance=100;b.panel1Size={width:0,height:0};b.panel2Size={width:0,height:0};b.splitterSize=
{width:0,height:0};b.splitterBlockSize={width:0,height:0};b.splitterHandleSize={width:0,height:0};b.swapButtonSize={width:0,height:0};b.tab1Size={width:0,height:0};b.tab1ContentSize={width:0,height:0};b.tab2Size={width:0,height:0};b.tab2ContentSize={width:0,height:0};b.handleClass=[];b.panelClass=[];b.splitterClass=[];b.swapButtonClass=[];b.tabClass=[];b.trialRef=null;b.orientationChanged=new EventEmitter;b.panelsSwapped=new EventEmitter;b.splitterMoved=new EventEmitter;b.splitterMoving=new EventEmitter;
b.splitterStartPos={x:0,y:0};b.isSplitterActive=!1;return b}Object.defineProperty(IntegralUISplitContainer.prototype,"orientation",{get:function(){return this.currentOrientation},set:function(a){if(this.currentOrientation!=a)var c=this,d=setTimeout(function(){c.currentOrientation=a;c.refresh();c.updateLayout();clearTimeout(d)},1)},enumerable:!0,configurable:!0});
Object.defineProperty(IntegralUISplitContainer.prototype,"panel1",{get:function(){return this.panel1Data},set:function(a){this.panel1Data!=a&&(this.panel1Data=a,this.updateLayout())},enumerable:!0,configurable:!0});Object.defineProperty(IntegralUISplitContainer.prototype,"panel2",{get:function(){return this.panel2Data},set:function(a){this.panel2Data!=a&&(this.panel2Data=a,this.updateLayout())},enumerable:!0,configurable:!0});
Object.defineProperty(IntegralUISplitContainer.prototype,"splitterDistance",{get:function(){return this.currentSplitterDistance},set:function(a){if(this.currentSplitterDistance!=a)var c=this,d=setTimeout(function(){a=c.orientation==IntegralUIOrientation.Vertical?Math.min(Math.max(0,a),c.maxPos.x):Math.min(Math.max(0,a),c.maxPos.y);c.currentSplitterDistance=a;c.splitterMoved.emit({value:a});c.updateLayout();clearTimeout(d)},1)},enumerable:!0,configurable:!0});
IntegralUISplitContainer.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.generalClassName="iui-splitcontainer";this.handleClassName=this.generalClassName+"-handle";this.panelClassName=this.generalClassName+"-panel";this.splitterClassName=this.generalClassName+"-splitter";this.swapButtonClassName=this.generalClassName+"-swap-button";this.tabClassName=this.generalClassName+"-tab";this.initStyle()};
IntegralUISplitContainer.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},panel:{disabled:this.panelClassName+"-disabled",normal:this.panelClassName+"-normal"},splitter:{general:{normal:this.splitterClassName,horizontal:this.splitterClassName+"-horizontal",vertical:this.splitterClassName+"-vertical"},
handle:{general:this.handleClassName,horizontal:this.handleClassName+"-horizontal",vertical:this.handleClassName+"-vertical"},swapButton:{disabled:this.swapButtonClassName+"-disabled",hovered:this.swapButtonClassName+"-hovered",normal:this.swapButtonClassName+"-normal",selected:this.swapButtonClassName+"-selected"},tab:{disabled:this.tabClassName+"-disabled",focused:this.tabClassName+"-focused",hovered:this.tabClassName+"-hovered",normal:this.tabClassName+"-normal",selected:this.tabClassName+"-selected"}}};
this.updateStyle(this.controlStyle);this.refresh()};IntegralUISplitContainer.prototype.ngAfterViewInit=function(){var a=this,c=setTimeout(function(){var d=a.cmpResolver.resolveComponentFactory(IntegralUITComponent);d&&a.splitterRef&&(a.trialRef=a.splitterRef.createComponent(d));clearTimeout(c)},100)};IntegralUISplitContainer.prototype.ngAfterContentInit=function(){this.ctrlRect=this.commonService.getPageRect(this.elemRef.nativeElement);this.updateLayout()};
IntegralUISplitContainer.prototype.ngOnDestroy=function(){this.trialRef&&this.trialRef.destroy()};IntegralUISplitContainer.prototype.swapButtonClicked=function(){this.swap=!this.swap;var a=this.panel1Data;this.panel1Data=this.panel2Data;this.panel2Data=a;this.panelsSwapped.emit(null);this.updateLayout()};
IntegralUISplitContainer.prototype.updateLayout=function(){var a=this,c=setTimeout(function(){a.splitterSize={width:0,height:0};for(var d=a.splitterElem.nativeElement.children,e=0;e<d.length-1;e++){switch(e){case 0:a.tab1Size={width:d[e].offsetWidth,height:d[e].offsetHeight};break;case 1:a.swapButtonSize={width:d[e].offsetWidth,height:d[e].offsetHeight};break;case 2:a.tab2Size={width:d[e].offsetWidth,height:d[e].offsetHeight}}a.splitterSize.width<d[0].firstElementChild.offsetHeight&&(a.splitterSize.width=
d[0].firstElementChild.offsetHeight);a.splitterSize.height<d[0].offsetHeight&&(a.splitterSize.height=d[0].offsetHeight)}a.tab1ContentSize={width:a.tab1ContentElem.nativeElement.offsetWidth,height:a.tab1ContentElem.nativeElement.offsetHeight};a.tab2ContentSize={width:a.tab2ContentElem.nativeElement.offsetWidth,height:a.tab2ContentElem.nativeElement.offsetHeight};a.splitterSize.width+=2;a.splitterSize.height+=2;a.clientRect={width:a.elemRef.nativeElement.firstElementChild.clientWidth-2,height:a.elemRef.nativeElement.firstElementChild.clientHeight-
2};a.panel1Size={width:a.currentSplitterDistance,height:a.currentSplitterDistance};a.panel2Size={width:a.clientRect.width-a.currentSplitterDistance-a.splitterSize.width-4,height:a.clientRect.height-a.currentSplitterDistance-a.splitterSize.height-4};a.splitterBlockSize=a.orientation==IntegralUIOrientation.Vertical?{width:a.splitterElem.nativeElement.clientWidth,height:a.splitterElem.nativeElement.clientHeight-(a.tab1ContentSize.width+a.swapButtonSize.height+a.tab2ContentSize.width+8)}:{width:a.splitterElem.nativeElement.clientWidth-
(a.tab1Size.width+a.swapButtonSize.width+a.tab2Size.width+8),height:a.splitterElem.nativeElement.clientHeight};a.splitterHandleSize={width:a.handleElem.nativeElement.offsetWidth,height:a.handleElem.nativeElement.offsetHeight};a.maxPos={x:a.clientRect.width-a.splitterSize.width-4,y:a.clientRect.height-a.splitterSize.height-4};clearTimeout(c)},1)};
IntegralUISplitContainer.prototype.ctrlMouseMove=function(a){if(1==a.buttons&&this.isSplitterActive){var c=this.commonService.getShiftPos();a={x:a.pageX-this.ctrlRect.left-c.x,y:a.pageY-this.ctrlRect.top-c.y};c=this.splitterDistance;this.orientation==IntegralUIOrientation.Vertical?(c+=a.x-this.splitterStartPos.x,c=Math.min(Math.max(0,c),this.maxPos.x)):(c+=a.y-this.splitterStartPos.y,c=Math.min(Math.max(0,c),this.maxPos.y));if(this.currentSplitterDistance!=c){var d={cancel:!1,value:c};this.splitterMoving.emit(d);
1!=d.cancel&&(this.currentSplitterDistance=c,this.updateLayout())}this.splitterStartPos=a}};
IntegralUISplitContainer.prototype.splitterMouseDown=function(a){var c=this.commonService.getShiftPos();a={x:a.pageX-this.ctrlRect.left-c.x,y:a.pageY-this.ctrlRect.top-c.y};this.orientation==IntegralUIOrientation.Vertical?a.y>this.tab1Size.height+this.swapButtonSize.height+this.tab2Size.height+10&&(this.splitterStartPos=a,this.isSplitterActive=!0):a.x>this.tab1Size.width+this.swapButtonSize.width+this.tab2Size.width+10&&(this.splitterStartPos=a,this.isSplitterActive=!0)};
IntegralUISplitContainer.prototype.onWindowMouseUp=function(a){this.isSplitterActive=!1;this.splitterMoved.emit({value:this.currentSplitterDistance})};IntegralUISplitContainer.prototype.getInlinePanel1Style=function(){var a={top:"0",left:"0",width:"auto",height:"auto"};this.orientation==IntegralUIOrientation.Vertical?(a.width=this.panel1Size.width+"px",a.height=this.clientRect.height+"px"):a.height=this.panel1Size.height+"px";return a};
IntegralUISplitContainer.prototype.getInlinePanel2Style=function(){var a={top:"0",left:"0",width:"auto",height:"auto"};this.orientation==IntegralUIOrientation.Vertical?(a.left=this.panel1Size.width+this.splitterSize.width+1+"px",a.width=this.panel2Size.width+"px",a.height=this.clientRect.height+"px"):(a.height=this.panel2Size.height+"px",a.top=this.panel1Size.height+this.splitterSize.height+"px");return a};
IntegralUISplitContainer.prototype.getInlineSplitterStyle=function(){var a={top:"0",left:"0",width:"auto",height:"auto"};this.orientation==IntegralUIOrientation.Vertical?(a.left=this.panel1Size.width+"px",a.width=this.splitterSize.width+"px",a.height=this.clientRect.height+"px"):(a.width=this.clientRect.width+"px",a.height=this.splitterSize.height+"px",a.top=this.panel1Size.height+1+"px");return a};
IntegralUISplitContainer.prototype.getInlineTab1Style=function(){var a={top:"-1px",left:"0",width:"auto",height:"auto"};this.orientation==IntegralUIOrientation.Vertical?(a.left="-1px",a["border-left"]="0",a.width=this.tab1ContentSize.height+"px",a.height=this.tab1ContentSize.width+"px"):(a.left="-1px",a["border-top"]="0",a.width=this.tab1ContentSize.width+"px",a.height=this.tab1ContentSize.height+"px");return a};
IntegralUISplitContainer.prototype.getInlineTab1ContentStyle=function(){var a={top:"0",left:"0"};this.orientation==IntegralUIOrientation.Vertical&&(a.top=(this.tab1ContentSize.width-this.tab1ContentSize.height)/2+"px",a.left=(this.tab1ContentSize.height-this.tab1ContentSize.width)/2+"px");return a};
IntegralUISplitContainer.prototype.getInlineTab2Style=function(){var a={top:"auto",right:"auto",bottom:"auto",left:"auto",width:"auto",height:"auto"};this.orientation==IntegralUIOrientation.Vertical?(a["border-right"]="0",a.right="-1px",a.top=this.tab1ContentSize.width+this.swapButtonSize.height+4+"px",a.width=this.tab2ContentSize.height+"px",a.height=this.tab2ContentSize.width+"px"):(a.bottom="-1px",a.left=this.tab1ContentSize.width+this.swapButtonSize.width+4+"px",a["border-bottom"]="0",a.width=
this.tab2ContentSize.width+"px",a.height=this.tab2ContentSize.height+"px");return a};IntegralUISplitContainer.prototype.getInlineTab2ContentStyle=function(){var a={top:"0",right:"0"};this.orientation==IntegralUIOrientation.Vertical&&(a.top=(this.tab2ContentSize.width-this.tab2ContentSize.height)/2+"px",a.right=(this.tab2ContentSize.height-this.tab2ContentSize.width)/2+"px");return a};
IntegralUISplitContainer.prototype.getInlineHandleBlockStyle=function(){var a={cursor:"ew-resize",width:"auto",height:"auto",top:"auto",left:"auto"};this.orientation==IntegralUIOrientation.Vertical?(a.height=this.splitterBlockSize.height+"px",a.top=this.tab1ContentSize.width+this.swapButtonSize.height+this.tab2ContentSize.width+8+"px",a.left=(this.splitterBlockSize.width-this.splitterHandleSize.width)/2+"px"):(a.cursor="ns-resize",a.width=this.splitterBlockSize.width+"px",a.top=(this.splitterBlockSize.height-
this.splitterHandleSize.height)/2+"px",a.left=this.tab1Size.width+this.swapButtonSize.width+this.tab2Size.width+8+"px");return a};IntegralUISplitContainer.prototype.getInlineHandleStyle=function(){var a={"margin-top":"0","margin-left":"0"};this.orientation==IntegralUIOrientation.Vertical?a["margin-top"]=(this.splitterBlockSize.height-this.splitterHandleSize.height)/2+"px":a["margin-left"]=(this.splitterBlockSize.width-this.splitterHandleSize.width)/2+"px";return a};
IntegralUISplitContainer.prototype.getInlineSwapButtonStyle=function(){return this.orientation==IntegralUIOrientation.Vertical?{top:this.tab1ContentSize.width+2+"px",left:(this.splitterSize.width-this.swapButtonSize.width)/2+"px"}:{top:(this.splitterSize.height-this.swapButtonSize.height)/2+"px",left:this.tab1ContentSize.width+2+"px"}};
IntegralUISplitContainer.prototype.updateSplitterClass=function(){this.splitterClass.length=0;this.splitterClass.push(this.splitterClassName);this.splitterClass.push(this.options.currentStyle.splitter.general.normal);this.orientation==IntegralUIOrientation.Vertical?this.splitterClass.push(this.options.currentStyle.splitter.general.vertical):this.splitterClass.push(this.options.currentStyle.splitter.general.horizontal)};IntegralUISplitContainer.prototype.getSplitterClass=function(){return this.splitterClass};
IntegralUISplitContainer.prototype.updateHandleClass=function(){this.handleClass.length=0;this.handleClass.push(this.handleClassName);this.handleClass.push(this.options.currentStyle.splitter.handle.general);this.orientation==IntegralUIOrientation.Vertical?this.handleClass.push(this.options.currentStyle.splitter.handle.vertical):this.handleClass.push(this.options.currentStyle.splitter.handle.horizontal)};IntegralUISplitContainer.prototype.getHandleClass=function(){return this.handleClass};
IntegralUISplitContainer.prototype.updatePanelClass=function(){this.panelClass.length=0;this.panelClass.push(this.panelClassName);this.panelClass.push(this.options.currentStyle.panel.normal)};IntegralUISplitContainer.prototype.getPanelClass=function(){return this.panelClass};
IntegralUISplitContainer.prototype.updateSwapButtonClass=function(){this.swapButtonClass.length=0;this.swapButtonClass.push(this.swapButtonClassName);this.swapButtonClass.push(this.options.currentStyle.splitter.swapButton.normal);this.orientation==IntegralUIOrientation.Vertical&&this.swapButtonClass.push(this.swapButtonClassName+"-vertical")};IntegralUISplitContainer.prototype.getSwapButtonClass=function(){return this.swapButtonClass};
IntegralUISplitContainer.prototype.updateTabClass=function(){this.tabClass.length=0;this.tabClass.push(this.tabClassName);this.tabClass.push(this.options.currentStyle.splitter.tab.selected);this.orientation==IntegralUIOrientation.Vertical&&this.tabClass.push(this.tabClassName+"-vertical")};IntegralUISplitContainer.prototype.getTabClass=function(){return this.tabClass};
IntegralUISplitContainer.prototype.getPanelStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.panelClassName+"-disabled"),normal:this.commonService.isFieldAvailable(a.normal,this.panelClassName)}:{disabled:this.defaultStyle.panel.disabled,normal:this.defaultStyle.panel.normal}};
IntegralUISplitContainer.prototype.getSplitterGeneralStyle=function(a){return this.commonService.isString(a)?a:a?{normal:this.commonService.isFieldAvailable(a.normal,this.splitterClassName),horizontal:this.commonService.isFieldAvailable(a.horizontal,this.splitterClassName+"-horizontal"),vertical:this.commonService.isFieldAvailable(a.vertical,this.splitterClassName+"-vertical")}:{normal:this.defaultStyle.splitter.general.normal,horizontal:this.defaultStyle.splitter.general.horizontal,vertical:this.defaultStyle.splitter.general.vertical}};
IntegralUISplitContainer.prototype.getHandleStyle=function(a){return this.commonService.isString(a)?a:a?{general:this.commonService.isFieldAvailable(a.general,this.handleClassName),horizontal:this.commonService.isFieldAvailable(a.horizontal,this.handleClassName+"-horizontal"),vertical:this.commonService.isFieldAvailable(a.vertical,this.handleClassName+"-vertical")}:{general:this.defaultStyle.splitter.handle.general,horizontal:this.defaultStyle.splitter.handle.horizontal,vertical:this.defaultStyle.splitter.handle.vertical}};
IntegralUISplitContainer.prototype.getSwapButtonStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.swapButtonClassName+"-disabled"),hovered:this.commonService.isFieldAvailable(a.hovered,this.swapButtonClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.swapButtonClassName),selected:this.commonService.isFieldAvailable(a.selected,this.swapButtonClassName+"-selected")}:{disabled:this.defaultStyle.splitter.swapButton.disabled,
hovered:this.defaultStyle.splitter.swapButton.hovered,normal:this.defaultStyle.splitter.swapButton.normal,selected:this.defaultStyle.splitter.swapButton.selected}};
IntegralUISplitContainer.prototype.getTabStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.tabClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.tabClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.tabClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.tabClassName),selected:this.commonService.isFieldAvailable(a.selected,this.tabClassName+
"-selected")}:{disabled:this.defaultStyle.splitter.tab.disabled,focused:this.defaultStyle.splitter.tab.focused,hovered:this.defaultStyle.splitter.tab.hovered,normal:this.defaultStyle.splitter.tab.normal,selected:this.defaultStyle.splitter.tab.selected}};
IntegralUISplitContainer.prototype.getSplitterStyle=function(a){return this.commonService.isString(a)?a:a?{general:this.getSplitterGeneralStyle(a.general),handle:this.getHandleStyle(a.handle),swapButton:this.getSwapButtonStyle(a.swapButton),tab:this.getTabStyle(a.tab)}:this.getDefaultSplitterStyle()};IntegralUISplitContainer.prototype.getDefaultStyle=function(){return{general:this.getDefaultGeneralStyle(),panel:this.getDefaultPanelStyle(),splitter:this.getDefaultSplitterStyle()}};
IntegralUISplitContainer.prototype.getDefaultPanelStyle=function(){return{disabled:this.defaultStyle.panel.disabled,normal:this.defaultStyle.panel.normal}};
IntegralUISplitContainer.prototype.getDefaultSplitterStyle=function(){return{general:{normal:this.defaultStyle.splitter.general.normal,horizontal:this.defaultStyle.splitter.general.horizontal,vertical:this.defaultStyle.splitter.general.vertical},handle:{general:this.defaultStyle.splitter.handle.general,horizontal:this.defaultStyle.splitter.handle.horizontal,vertical:this.defaultStyle.splitter.handle.vertical},swapButton:{disabled:this.defaultStyle.splitter.swapButton.disabled,hovered:this.defaultStyle.splitter.swapButton.hovered,
normal:this.defaultStyle.splitter.swapButton.normal,selected:this.defaultStyle.splitter.swapButton.selected},tab:{disabled:this.defaultStyle.splitter.tab.disabled,focused:this.defaultStyle.splitter.tab.focused,hovered:this.defaultStyle.splitter.tab.hovered,normal:this.defaultStyle.splitter.tab.normal,selected:this.defaultStyle.splitter.tab.selected}}};
IntegralUISplitContainer.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),panel:this.getPanelStyle(a.panel),splitter:this.getSplitterStyle(a.splitter)}:this.getDefaultStyle()};IntegralUISplitContainer.prototype.refresh=function(){this.updateControlClass();this.updateSplitterClass();this.updateHandleClass();this.updatePanelClass();this.updateSwapButtonClass();this.updateTabClass()};    return IntegralUISplitContainer;
}(IntegralUIBaseComponent));
export { IntegralUISplitContainer };
IntegralUISplitContainer.decorators = [
    { type: Component, args: [{
                selector: 'iui-splitcontainer',
                template: "\n\t\t<div [ngClass]=\"getControlClass()\" (mousemove)=\"ctrlMouseMove($event)\">\n\t\t\t<div [ngClass]=\"getPanelClass()\" [ngStyle]=\"getInlinePanel1Style()\" #panel1>\n\t\t\t\t<ng-content select=\"iui-panel1\"></ng-content>\n\t\t\t</div>\n\t\t\t<div [ngClass]=\"getSplitterClass()\" [ngStyle]=\"getInlineSplitterStyle()\" (mousedown)=\"splitterMouseDown($event)\" #splitter>\n\t\t\t\t<div [ngClass]=\"getTabClass()\" [ngStyle]=\"getInlineTab1Style()\">\n\t\t\t\t\t<div #tab1Content [ngStyle]=\"getInlineTab1ContentStyle()\">\n\t\t\t\t\t\t<span *ngIf=\"panel1Data.icon\" [ngClass]=\"panel1Data.icon\"></span>\n\t\t\t\t\t    <span *ngIf=\"panel1Data.text\">{{panel1Data.text}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div [ngClass]=\"getSwapButtonClass()\" [ngStyle]=\"getInlineSwapButtonStyle()\" (click)=\"swapButtonClicked()\" #btnSwap>\n\t\t\t\t\t<span></span>\n\t\t\t\t</div>\n\t\t\t\t<div [ngClass]=\"getTabClass()\" [ngStyle]=\"getInlineTab2Style()\">\n\t\t\t\t\t<div #tab2Content [ngStyle]=\"getInlineTab2ContentStyle()\">\n\t\t\t\t\t\t<span *ngIf=\"panel2Data.icon\" [ngClass]=\"panel2Data.icon\"></span>\n\t\t\t\t\t    <span *ngIf=\"panel2Data.text\">{{panel2Data.text}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div [ngClass]=\"getHandleClass()\" [ngStyle]=\"getInlineHandleBlockStyle()\">\n\t\t\t\t\t<span [ngStyle]=\"getInlineHandleStyle()\" #handle></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div [ngClass]=\"getPanelClass()\" [ngStyle]=\"getInlinePanel2Style()\" #panel2>\n\t\t\t\t<ng-content select=\"iui-panel2\"></ng-content>\n\t\t\t</div>\n\t\t</div>\n\t",
                inputs: ['controlStyle', 'data', 'name', 'state'],
                providers: [IntegralUIBaseService],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
IntegralUISplitContainer.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: IntegralUICommonService, },
    { type: ComponentFactoryResolver, },
    { type: IntegralUIBaseService, },
]; };
IntegralUISplitContainer.propDecorators = {
    'handleElem': [{ type: ViewChild, args: ['handle',] },],
    'panel1Elem': [{ type: ViewChild, args: ['panel1',] },],
    'panel2Elem': [{ type: ViewChild, args: ['panel2',] },],
    'splitterElem': [{ type: ViewChild, args: ['splitter',] },],
    'splitterRef': [{ type: ViewChild, args: ['splitter', { read: ViewContainerRef },] },],
    'tab1ContentElem': [{ type: ViewChild, args: ['tab1Content',] },],
    'tab2ContentElem': [{ type: ViewChild, args: ['tab2Content',] },],
    'orientation': [{ type: Input },],
    'panel1': [{ type: Input },],
    'panel2': [{ type: Input },],
    'splitterDistance': [{ type: Input },],
    'orientationChanged': [{ type: Output },],
    'panelsSwapped': [{ type: Output },],
    'splitterMoved': [{ type: Output },],
    'splitterMoving': [{ type: Output },],
    'onWindowMouseUp': [{ type: HostListener, args: ['document:mouseup', ['$event'],] },],
};
//# sourceMappingURL=integralui.splitcontainer.js.map