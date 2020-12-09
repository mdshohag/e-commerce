function OnlyNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode

    if ((charCode < 48 || charCode > 57) && (charCode !== 8) && (charCode !== 9) && (charCode !== 46))

        return false;
}