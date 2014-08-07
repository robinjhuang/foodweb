    // $(document).ready(function(){
    //     $('#toggle-button').click(function(){
    //         if($('#toggle-icon').hasClass('fa-caret-down')) {
    //             $("#toggle-icon").removeClass('fa-caret-down');
    //             $("#toggle-icon").addClass('fa-caret-right');
    //         }

    //         else {
    //                 $("#toggle-icon").addClass('fa-caret-down');
    //                 $("#toggle-icon").removeClass('fa-caret-right');
    //             }
                
    //     });
    // });

    $(document).ready(function(){

        $('.btn-popover').popover();

        // Add custom JS here
        $('a[rel=popover]').popover({
            html: true,
            trigger: 'hover',
            placement: 'bottom',
            delay: {show: 30, hide: 30},
            content: function(){return '<img class= "gif" src="'+$(this).data('img') + '" />';}
            });

        
        //INGREDIENT CARET ICON

        $("#ingredient-header").click(function(){
            if ($('#ingredient-icon').hasClass('fa-caret-down')) {
                $('#ingredient-icon').removeClass('fa-caret-down');
                $('#ingredient-icon').addClass('fa-caret-right');
            }

            else {
                $('#ingredient-icon').removeClass('fa-caret-right');
                $('#ingredient-icon').addClass('fa-caret-down');
            }
        });

        //KITCHEN CARET ICON

        $("#kitchentools-header").click(function(){
            if ($('#kitchen-icon').hasClass('fa-caret-down')) {
                $('#kitchen-icon').removeClass('fa-caret-down');
                $('#kitchen-icon').addClass('fa-caret-right');
            }

            else {
                $('#kitchen-icon').removeClass('fa-caret-right');
                $('#kitchen-icon').addClass('fa-caret-down');
            }
        });

        //PREP CARET ICON

         $("#prep-header").click(function(){
            if ($('#prep-icon').hasClass('fa-caret-down')) {
                $('#prep-icon').removeClass('fa-caret-down');
                $('#prep-icon').addClass('fa-caret-right');
            }

            else {
                $('#prep-icon').removeClass('fa-caret-right');
                $('#prep-icon').addClass('fa-caret-down');
            }
        });

         //COOK CARET ICON
          $("#cook-header").click(function(){
            if ($('#cook-icon').hasClass('fa-caret-down')) {
                $('#cook-icon').removeClass('fa-caret-down');
                $('#cook-icon').addClass('fa-caret-right');
            }

            else {
                $('#cook-icon').removeClass('fa-caret-right');
                $('#cook-icon').addClass('fa-caret-down');
            }
        });
    });