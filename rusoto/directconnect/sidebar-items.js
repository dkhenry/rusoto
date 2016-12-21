initSidebarItems({"enum":[["AllocateConnectionOnInterconnectError",""],["AllocatePrivateVirtualInterfaceError",""],["AllocatePublicVirtualInterfaceError",""],["ConfirmConnectionError",""],["ConfirmPrivateVirtualInterfaceError",""],["ConfirmPublicVirtualInterfaceError",""],["CreateConnectionError",""],["CreateInterconnectError",""],["CreatePrivateVirtualInterfaceError",""],["CreatePublicVirtualInterfaceError",""],["DeleteConnectionError",""],["DeleteInterconnectError",""],["DeleteVirtualInterfaceError",""],["DescribeConnectionLoaError",""],["DescribeConnectionsError",""],["DescribeConnectionsOnInterconnectError",""],["DescribeInterconnectLoaError",""],["DescribeInterconnectsError",""],["DescribeLocationsError",""],["DescribeVirtualGatewaysError",""],["DescribeVirtualInterfacesError",""]],"struct":[["AllocateConnectionOnInterconnectRequest","<p>Container for the parameters to the AllocateConnectionOnInterconnect operation.</p>"],["AllocatePrivateVirtualInterfaceRequest","<p>Container for the parameters to the AllocatePrivateVirtualInterface operation.</p>"],["AllocatePublicVirtualInterfaceRequest","<p>Container for the parameters to the AllocatePublicVirtualInterface operation.</p>"],["ConfirmConnectionRequest","<p>Container for the parameters to the ConfirmConnection operation.</p>"],["ConfirmConnectionResponse","<p>The response received when ConfirmConnection is called.</p>"],["ConfirmPrivateVirtualInterfaceRequest","<p>Container for the parameters to the ConfirmPrivateVirtualInterface operation.</p>"],["ConfirmPrivateVirtualInterfaceResponse","<p>The response received when ConfirmPrivateVirtualInterface is called.</p>"],["ConfirmPublicVirtualInterfaceRequest","<p>Container for the parameters to the ConfirmPublicVirtualInterface operation.</p>"],["ConfirmPublicVirtualInterfaceResponse","<p>The response received when ConfirmPublicVirtualInterface is called.</p>"],["Connection","<p>A connection represents the physical network connection between the AWS Direct Connect location and the customer.</p>"],["Connections","<p>A structure containing a list of connections.</p>"],["CreateConnectionRequest","<p>Container for the parameters to the CreateConnection operation.</p>"],["CreateInterconnectRequest","<p>Container for the parameters to the CreateInterconnect operation.</p>"],["CreatePrivateVirtualInterfaceRequest","<p>Container for the parameters to the CreatePrivateVirtualInterface operation.</p>"],["CreatePublicVirtualInterfaceRequest","<p>Container for the parameters to the CreatePublicVirtualInterface operation.</p>"],["DeleteConnectionRequest","<p>Container for the parameters to the DeleteConnection operation.</p>"],["DeleteInterconnectRequest","<p>Container for the parameters to the DeleteInterconnect operation.</p>"],["DeleteInterconnectResponse","<p>The response received when DeleteInterconnect is called.</p>"],["DeleteVirtualInterfaceRequest","<p>Container for the parameters to the DeleteVirtualInterface operation.</p>"],["DeleteVirtualInterfaceResponse","<p>The response received when DeleteVirtualInterface is called.</p>"],["DescribeConnectionLoaRequest","<p>Container for the parameters to the DescribeConnectionLoa operation.</p>"],["DescribeConnectionLoaResponse","<p>The response received when DescribeConnectionLoa is called.</p>"],["DescribeConnectionsOnInterconnectRequest","<p>Container for the parameters to the DescribeConnectionsOnInterconnect operation.</p>"],["DescribeConnectionsRequest","<p>Container for the parameters to the DescribeConnections operation.</p>"],["DescribeInterconnectLoaRequest","<p>Container for the parameters to the DescribeInterconnectLoa operation.</p>"],["DescribeInterconnectLoaResponse","<p>The response received when DescribeInterconnectLoa is called.</p>"],["DescribeInterconnectsRequest","<p>Container for the parameters to the DescribeInterconnects operation.</p>"],["DescribeVirtualInterfacesRequest","<p>Container for the parameters to the DescribeVirtualInterfaces operation.</p>"],["DirectConnectClient","A client for the AWS Direct Connect API."],["Interconnect","<p>An interconnect is a connection that can host other connections.</p> <p>Like a standard AWS Direct Connect connection, an interconnect represents the physical connection between an AWS Direct Connect partner's network and a specific Direct Connect location. An AWS Direct Connect partner who owns an interconnect can provision hosted connections on the interconnect for their end customers, thereby providing the end customers with connectivity to AWS services.</p> <p>The resources of the interconnect, including bandwidth and VLAN numbers, are shared by all of the hosted connections on the interconnect, and the owner of the interconnect determines how these resources are assigned.</p>"],["Interconnects","<p>A structure containing a list of interconnects.</p>"],["Loa","<p>A structure containing the Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection.</p>"],["Location","<p>An AWS Direct Connect location where connections and interconnects can be requested.</p>"],["Locations","<p>A location is a network facility where AWS Direct Connect routers are available to be connected. Generally, these are colocation hubs where many network providers have equipment, and where cross connects can be delivered. Locations include a name and facility code, and must be provided when creating a connection.</p>"],["NewPrivateVirtualInterface","<p>A structure containing information about a new private virtual interface.</p>"],["NewPrivateVirtualInterfaceAllocation","<p>A structure containing information about a private virtual interface that will be provisioned on a connection.</p>"],["NewPublicVirtualInterface","<p>A structure containing information about a new public virtual interface.</p>"],["NewPublicVirtualInterfaceAllocation","<p>A structure containing information about a public virtual interface that will be provisioned on a connection.</p>"],["RouteFilterPrefix","<p>A route filter prefix that the customer can advertise through Border Gateway Protocol (BGP) over a public virtual interface.</p>"],["VirtualGateway","<p>You can create one or more AWS Direct Connect private virtual interfaces linking to your virtual private gateway.</p> <p>Virtual private gateways can be managed using the Amazon Virtual Private Cloud (Amazon VPC) console or the <a href=\"http://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-CreateVpnGateway.html\">Amazon EC2 CreateVpnGateway action</a>.</p>"],["VirtualGateways","<p>A structure containing a list of virtual private gateways.</p>"],["VirtualInterface","<p>A virtual interface (VLAN) transmits the traffic between the AWS Direct Connect location and the customer.</p>"],["VirtualInterfaces","<p>A structure containing a list of virtual interfaces.</p>"]],"type":[["ASN","<p>Autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p> <p>Example: 65000</p>"],["AmazonAddress","<p>IP address assigned to the Amazon interface.</p> <p>Example: 192.168.1.1/30</p>"],["BGPAuthKey","<p>Authentication key for BGP configuration.</p> <p>Example: asdf34example</p>"],["Bandwidth","<p>Bandwidth of the connection.</p> <p>Example: 1Gbps</p> <p>Default: None</p>"],["CIDR",""],["ConnectionId","<p>ID of the connection.</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>"],["ConnectionList","<p>A list of connections.</p>"],["ConnectionName","<p>The name of the connection.</p> <p>Example: \"<i>My Connection to AWS</i>\"</p> <p>Default: None</p>"],["ConnectionState","<p>State of the connection.</p> <ul> <li> <p> <b>Ordering</b>: The initial state of a hosted connection provisioned on an interconnect. The connection stays in the ordering state until the owner of the hosted connection confirms or declines the connection order.</p> </li> <li> <p> <b>Requested</b>: The initial state of a standard connection. The connection stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.</p> </li> <li> <p> <b>Pending</b>: The connection has been approved, and is being initialized.</p> </li> <li> <p> <b>Available</b>: The network link is up, and the connection is ready for use.</p> </li> <li> <p> <b>Down</b>: The network link is down.</p> </li> <li> <p> <b>Deleting</b>: The connection is in the process of being deleted.</p> </li> <li> <p> <b>Deleted</b>: The connection has been deleted.</p> </li> <li> <p> <b>Rejected</b>: A hosted connection in the 'Ordering' state will enter the 'Rejected' state if it is deleted by the end customer.</p> </li> </ul>"],["CustomerAddress","<p>IP address assigned to the customer interface.</p> <p>Example: 192.168.1.2/30</p>"],["ErrorMessage",""],["InterconnectId","<p>The ID of the interconnect.</p> <p>Example: dxcon-abc123</p>"],["InterconnectList","<p>A list of interconnects.</p>"],["InterconnectName","<p>The name of the interconnect.</p> <p>Example: \"<i>1G Interconnect to AWS</i>\"</p>"],["InterconnectState","<p>State of the interconnect.</p> <ul> <li> <p> <b>Requested</b>: The initial state of an interconnect. The interconnect stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.</p> </li> <li> <p> <b>Pending</b>: The interconnect has been approved, and is being initialized.</p> </li> <li> <p> <b>Available</b>: The network link is up, and the interconnect is ready for use.</p> </li> <li> <p> <b>Down</b>: The network link is down.</p> </li> <li> <p> <b>Deleting</b>: The interconnect is in the process of being deleted.</p> </li> <li> <p> <b>Deleted</b>: The interconnect has been deleted.</p> </li> </ul>"],["LoaContent","<p>The binary contents of the LOA-CFA document.</p>"],["LoaContentType","<p>A standard media type indicating the content type of the LOA-CFA document. Currently, the only supported value is \"application/pdf\".</p> <p>Default: application/pdf</p>"],["LoaIssueTime",""],["LocationCode","<p>Where the connection is located.</p> <p>Example: EqSV5</p> <p>Default: None</p>"],["LocationList",""],["LocationName",""],["OwnerAccount",""],["PartnerName",""],["ProviderName",""],["Region","<p>The AWS region where the connection is located.</p> <p>Example: us-east-1</p> <p>Default: None</p>"],["RouteFilterPrefixList","<p>A list of routes to be advertised to the AWS network in this region (public virtual interface).</p>"],["RouterConfig",""],["VLAN","<p>The VLAN ID.</p> <p>Example: 101</p>"],["VirtualGatewayId","<p>The ID of the virtual private gateway to a VPC. This only applies to private virtual interfaces.</p> <p>Example: vgw-123er56</p>"],["VirtualGatewayList","<p>A list of virtual private gateways.</p>"],["VirtualGatewayState","<p>State of the virtual private gateway.</p> <ul> <li> <p> <b>Pending</b>: This is the initial state after calling <i>CreateVpnGateway</i>.</p> </li> <li> <p> <b>Available</b>: Ready for use by a private virtual interface.</p> </li> <li> <p> <b>Deleting</b>: This is the initial state after calling <i>DeleteVpnGateway</i>.</p> </li> <li> <p> <b>Deleted</b>: In this state, a private virtual interface is unable to send traffic over this gateway.</p> </li> </ul>"],["VirtualInterfaceId","<p>ID of the virtual interface.</p> <p>Example: dxvif-123dfg56</p> <p>Default: None</p>"],["VirtualInterfaceList","<p>A list of virtual interfaces.</p>"],["VirtualInterfaceName","<p>The name of the virtual interface assigned by the customer.</p> <p>Example: \"My VPC\"</p>"],["VirtualInterfaceState","<p>State of the virtual interface.</p> <ul> <li> <p> <b>Confirming</b>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p> </li> <li> <p> <b>Verifying</b>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p> </li> <li> <p> <b>Pending</b>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p> </li> <li> <p> <b>Available</b>: A virtual interface that is able to forward traffic.</p> </li> <li> <p> <b>Down</b>: A virtual interface that is BGP down.</p> </li> <li> <p> <b>Deleting</b>: A virtual interface is in this state immediately after calling <i>DeleteVirtualInterface</i> until it can no longer forward traffic.</p> </li> <li> <p> <b>Deleted</b>: A virtual interface that cannot forward traffic.</p> </li> <li> <p> <b>Rejected</b>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the 'Confirming' state is deleted by the virtual interface owner, the virtual interface will enter the 'Rejected' state.</p> </li> </ul>"],["VirtualInterfaceType","<p>The type of virtual interface.</p> <p>Example: private (Amazon VPC) or public (Amazon S3, Amazon DynamoDB, and so on.)</p>"]]});