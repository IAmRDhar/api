define([
  'core/widgets/PaginatorWidget',
  'core/widgets/ButtonWidget',
  'core/widgets/SearchWidget',
  'core/widgets/SaveWidget',
  'core/widgets/VisibilityWidget',
  'core/widgets/FilterWidget'
],

function(PaginatorWidget, ButtonWidget, SearchWidget, SaveWidget, VisibilityWidget, FilterWidget) {

  return {
    PaginatorWidget: PaginatorWidget,
    ButtonWidget: ButtonWidget,
    SearchWidget: SearchWidget,
    SaveWidget: SaveWidget,
    VisibilityWidget: VisibilityWidget,
    FilterWidget: FilterWidget
  };

});