(function() {
	YAHOO.Bubbling
	.fire("registerAction",
	{
		actionName : "onOpenFolder",
		fn : function com_arondor_arender_compare_onOpenFolder(record) {
			var nodeRefs = "";
			if (YAHOO.lang.isArray(record) && record.length == 1) {
				var document = record[0];
				if (document.node.isContainer) {
					nodeRefs += document.nodeRef;
				} else {
					Alfresco.util.PopupManager
					.displayMessage({
						text : this.msg("message.folder.not.folder.error")
					});
				}
			} else {
				Alfresco.util.PopupManager
				.displayMessage({
					text : this.msg("message.folder.select.one.error")
				});
			}
			if (nodeRefs != "") {
				window.open(
					Alfresco.constants.PROXY_URI + "/arender/doclib/action/folder?folderRef=" + nodeRefs, '_blank');
			}
		}
	});
})();

