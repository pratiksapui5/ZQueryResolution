function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZVECV_PURCHASE_ORDER_QUERY_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}