(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3535],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,f=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6929:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],s={id:"tribute-nft-adapter",title:"NFT Tribute"},l={unversionedId:"contracts/adapters/onboarding/tribute-nft-adapter",id:"contracts/adapters/onboarding/tribute-nft-adapter",isDocsHomePage:!1,title:"NFT Tribute",description:"The Tribute NFT adapter allows potential and existing DAO members to contribute any ERC-721 tokens to the DAO in exchange for any amount of DAO internal tokens (in this case it mints UNITS always). If the proposal passes, the requested internal tokens are minted to the applicant (which effectively makes the applicant a member of the DAO if not already one) and the ERC-721 asset provided as tribute is transferred to the NFT extension.",source:"@site/docs/contracts/adapters/onboarding/TributeNFT.md",sourceDirName:"contracts/adapters/onboarding",slug:"/contracts/adapters/onboarding/tribute-nft-adapter",permalink:"/tribute-contracts/docs/contracts/adapters/onboarding/tribute-nft-adapter",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/contracts/adapters/onboarding/TributeNFT.md",version:"current",frontMatter:{id:"tribute-nft-adapter",title:"NFT Tribute"},sidebar:"docs",previous:{title:"ERC20 Tribute",permalink:"/tribute-contracts/docs/contracts/adapters/onboarding/tribute-adapter"},next:{title:"Basic",permalink:"/tribute-contracts/docs/contracts/adapters/voting/basic-voting-adapter"}},p=[{value:"Workflow",id:"workflow",children:[]},{value:"Access Flags",id:"access-flags",children:[{value:"DAORegistry",id:"daoregistry",children:[]},{value:"NFT Extension",id:"nft-extension",children:[]},{value:"Bank Extension",id:"bank-extension",children:[]}]},{value:"Structs",id:"structs",children:[{value:"ProposalDetails",id:"proposaldetails",children:[]}]},{value:"Dependencies",id:"dependencies",children:[{value:"BankExtension",id:"bankextension",children:[]},{value:"NFTExtension",id:"nftextension",children:[]},{value:"DaoRegistry",id:"daoregistry-1",children:[]},{value:"Voting",id:"voting",children:[]}]},{value:"Storage",id:"storage",children:[{value:"proposals",id:"proposals",children:[]}]},{value:"Functions",id:"functions",children:[{value:"receive",id:"receive",children:[]},{value:"configureDao",id:"configuredao",children:[]},{value:"submitProposal",id:"submitproposal",children:[]},{value:"processProposal",id:"processproposal",children:[]}]},{value:"Events",id:"events",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Tribute NFT adapter allows potential and existing DAO members to contribute any ERC-721 tokens to the DAO in exchange for any amount of DAO internal tokens (in this case it mints UNITS always). If the proposal passes, the requested internal tokens are minted to the applicant (which effectively makes the applicant a member of the DAO if not already one) and the ERC-721 asset provided as tribute is transferred to the NFT extension."),(0,o.kt)("p",null,"The Tribute NFT adapter is similar to the Onboarding adapter in that both allow for joining the DAO (or increasing a stake in the DAO) through the exchange of contributed assets for DAO internal tokens. However, there are key differences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The Onboarding adapter allows both Ether and ERC-20 tokens to be contributed. The Tribute NFT adapter accepts only ERC-721 tokens.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The Onboarding adapter mints a fixed amount of internal tokens to the applicant based on the amount of assets contributed. In other words, an onboarding proposal does not specify the amount of internal tokens requested. That is calculated from the DAO's configurations and the amount of assets contributed. The Tribute NFT adapter has more open-ended proposal parameters. The proposer can request any amount of internal tokens to be minted in exchange for an ERC-721 token contributed. The worthiness of that transfer proposal for the DAO is left to the vote of its members."))),(0,o.kt)("h2",{id:"workflow"},"Workflow"),(0,o.kt)("p",null,"A tribute is made by a member first submitting a proposal specifying (1) the applicant who wishes to join the DAO (or increase his stake in the DAO), (2) the amount of internal tokens (UNITS) the applicant desires, and (3) the ERC-721 address and token id of the NFT that will transfer to the DAO in exchange for those internal tokens. The applicant and actual owner of the NFT can be separate accounts (e.g., the NFT owner is providing tribute on behalf of the applicant). The proposal submission does not actually transfer the ERC-721 token from its owner. That occurs only after the proposal passes and is processed."),(0,o.kt)("p",null,"The proposal is also sponsored in the same transaction when it is submitted. When a DAO member sponsors the proposal, the voting period begins allowing members to vote for or against the proposal. Only a member can sponsor the proposal."),(0,o.kt)("p",null,"After the voting period is done along with its subsequent grace period, the proposal can be processed. Any account can process the proposal. However, prior to processing a passed proposal, the ERC-721 token owner must first separately ",(0,o.kt)("inlineCode",{parentName:"p"},"approve")," the NFT extension as spender of the token provided as tribute. Upon processing, if the vote has passed, the requested internal tokens are minted to the applicant (which effectively makes the applicant a member of the DAO if not already one). The tribute token is transferred from the token owner to the NFT extension."),(0,o.kt)("p",null,"Upon processing, if the vote has failed (i.e., more NO votes then YES votes or a tie), no further action is taken (the ERC-721 token owner still retains ownership of the token)."),(0,o.kt)("h2",{id:"access-flags"},"Access Flags"),(0,o.kt)("h3",{id:"daoregistry"},"DAORegistry"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SUBMIT_PROPOSAL"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"NEW_MEMBER"),".")),(0,o.kt)("h3",{id:"nft-extension"},"NFT Extension"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"COLLECT_NFT"),".")),(0,o.kt)("h3",{id:"bank-extension"},"Bank Extension"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ADD_TO_BALANCE"),".")),(0,o.kt)("h2",{id:"structs"},"Structs"),(0,o.kt)("h3",{id:"proposaldetails"},"ProposalDetails"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id"),": The proposal id."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"applicant"),": The applicant address (who will receive the DAO internal tokens and become a member; this address may be different than the actual owner of the ERC-721 token being provided as tribute)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nftAddr"),": The address of the ERC-721 token that will be transferred to the DAO in exchange for DAO internal tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nftTokenId"),": The NFT token identifier."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"requestAmount"),": The amount requested of DAO internal tokens (UNITS).")),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("h3",{id:"bankextension"},"BankExtension"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Registers DAO internal token (in this case UNITS) to be minted to the applicant in adapter configuration."),(0,o.kt)("li",{parentName:"ul"},"Adds to the applicant balance the amount of requested DAO internal tokens.")),(0,o.kt)("h3",{id:"nftextension"},"NFTExtension"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Transfers the NFT asset from the owner to the NFT extension collection.")),(0,o.kt)("h3",{id:"daoregistry-1"},"DaoRegistry"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gets Bank extension address."),(0,o.kt)("li",{parentName:"ul"},"Checks if applicant address is not reserved."),(0,o.kt)("li",{parentName:"ul"},"Gets Voting adapter address."),(0,o.kt)("li",{parentName:"ul"},"Submits/sponsors/processes the tribute proposal."),(0,o.kt)("li",{parentName:"ul"},"Checks if proposal flag is ",(0,o.kt)("inlineCode",{parentName:"li"},"SPONSORED"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"PROCESSED"),"."),(0,o.kt)("li",{parentName:"ul"},"Creates a new member entry (if applicant is not already a member).")),(0,o.kt)("h3",{id:"voting"},"Voting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gets address that sent the sponsorProposal transaction."),(0,o.kt)("li",{parentName:"ul"},"Starts new voting for the tribute proposal."),(0,o.kt)("li",{parentName:"ul"},"Checks the voting results.")),(0,o.kt)("h2",{id:"storage"},"Storage"),(0,o.kt)("h3",{id:"proposals"},"proposals"),(0,o.kt)("p",null,"All tribute NFT proposals handled by each DAO."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"receive"},"receive"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice default fallback function to prevent from sending ether to the contract.\n     */\n    receive() external payable\n")),(0,o.kt)("h3",{id:"configuredao"},"configureDao"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Configures the adapter for a particular DAO.\n     * @notice Registers the DAO internal token UNITS with the DAO Bank.\n     * @dev Only adapters registered to the DAO can execute the function call (or if the DAO is in creation mode).\n     * @dev A DAO Bank extension must exist and be configured with proper access for this adapter.\n     * @param dao The DAO address.\n     */\n    function configureDao(DaoRegistry dao) external onlyAdapter(dao)\n")),(0,o.kt)("h3",{id:"submitproposal"},"submitProposal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"   /**\n     * @notice Creates and sponsors a tribute proposal to start the voting process.\n     * @dev Applicant address must not be reserved.\n     * @dev Only members of the DAO can sponsor a tribute proposal.\n     * @param dao The DAO address.\n     * @param proposalId The proposal id (managed by the client).\n     * @param applicant The applicant address (who will receive the DAO internal tokens and become a member).\n     * @param nftAddr The address of the ERC-721 token that will be transferred to the DAO in exchange for DAO internal tokens.\n     * @param nftTokenId The NFT token id.\n     * @param requestAmount The amount requested of DAO internal tokens (UNITS).\n     * @param data Additional information related to the tribute proposal.\n     */\n    function submitProposal(\n        DaoRegistry dao,\n        bytes32 proposalId,\n        address applicant,\n        address nftAddr,\n        uint256 nftTokenId,\n        uint256 requestAmount,\n        bytes memory data\n    ) external reentrancyGuard(dao)\n")),(0,o.kt)("h3",{id:"processproposal"},"processProposal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"   /**\n     * @notice Processes the proposal to handle minting and exchange of DAO internal tokens for tribute token (passed vote).\n     * @dev Proposal id must exist.\n     * @dev Only proposals that have not already been processed are accepted.\n     * @dev Only sponsored proposals with completed voting are accepted.\n     * @dev The owner of the ERC-721 token provided as tribute must first separately `approve` the NFT extension as spender of that token (so the NFT can be transferred for a passed vote).\n     * @param dao The DAO address.\n     * @param proposalId The proposal id.\n     */\n    function processProposal(DaoRegistry dao, bytes32 proposalId)\n        external\n        reentrancyGuard(dao)\n")),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("p",null,"No events are emitted."))}c.isMDXComponent=!0}}]);