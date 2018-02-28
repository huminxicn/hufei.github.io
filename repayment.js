const rePayeeTypeOptions = [];
// AT10004   农机分期
// AT10006   农补分期
// AT10008   肥宝宝分期
// AT10014   土地租金分期
// AT10015   人工分期
// AT10016   粮食分期
// AT10017   农活服务分期
// AT10018   非自营农资
// AT10019   救灾贴息贷
for (const obj of Constant.repayType) {
    if (
        applyOrder.templateId === "AT10004" || // 农机分期-农忙季还款
        applyOrder.templateId === "AT10014" ||
        applyOrder.templateId === "AT10015" ||
        applyOrder.templateId === "AT10016" ||
        applyOrder.templateId === "AT10019"
    ) {
        if (1 === obj.id) {
            rePayeeTypeOptions.push(
            <Option key={obj.id} value={obj.id}>
            {obj.name}
        </Option>
        );
        }
    } else if ("AT10006" === applyOrder.templateId) {
        // 农补分期-农补还款
        if (3 === obj.id) {
            rePayeeTypeOptions.push(
            <Option key={obj.id} value={obj.id}>
            {obj.name}
        </Option>
        );
        }
    } else if (
        "AT10008" === applyOrder.templateId ||
        "AT10021" === applyOrder.templateId
    ) {
        // 肥宝宝分期-到期还本付息
        if (5 === obj.id) {
            rePayeeTypeOptions.push(
            <Option key={obj.id} value={obj.id}>
            {obj.name}
        </Option>
        );
        }
    } else if ("AT10018" === applyOrder.templateId) {
        // 非自营农资-农忙季还款，到期还本付息
        if (1 === obj.id || 5 === obj.id) {
            rePayeeTypeOptions.push(
            <Option key={obj.id} value={obj.id}>
            {obj.name}
        </Option>
        );
        }
    } else if ("AT10017" === applyOrder.templateId) {
        // 农活服务分期-农忙季还款,到期还本付息
        if (1 === obj.id || 5 === obj.id) {
            rePayeeTypeOptions.push(
            <Option key={obj.id} value={obj.id}>
            {obj.name}
        </Option>
        );
        }
    } else {
        if (5 !== obj.id) {
            rePayeeTypeOptions.push(
            <Option key={obj.id} value={obj.id}>
            {obj.name}
        </Option>
        );
        }
    }
}
