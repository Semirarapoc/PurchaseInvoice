InvokeApplication "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "john" @@ hightlight id_;_2133237552_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "64473135b7f90d29dcba" @@ hightlight id_;_2133240192_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2133243360_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Paris" @@ hightlight id_;_2133242736_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "San Francisco" @@ hightlight id_;_2133244224_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2133242928_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 1,1 @@ hightlight id_;_2133245232_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2133234816_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set DataTable("PassengerName", dtGlobalSheet) @@ hightlight id_;_2050443744_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_2133246096_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_4785570_;_script infofile_;_ZIP::ssf15.xml_;_
