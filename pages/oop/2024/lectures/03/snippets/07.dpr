TMyClass = class
    private
        FMyField: Integer;
        procedure SetMyField(const Value: Integer);
        function getMyField: Integer;
    public
        property MyField: Integer read GetMyField write SetMyField;
end;