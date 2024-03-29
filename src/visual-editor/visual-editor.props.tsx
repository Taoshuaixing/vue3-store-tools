export enum VisualEditorPropsType {
  /** 输入框 */
  input = 'input',
  /** 数字输入框 */
  inputNumber = 'InputNumber',
  /** 颜色选择器 */
  color = 'color',
  /** 下拉选择器 */
  select = 'select',
  /** 表格 */
  table = 'table',
  /** 开关 */
  switch = 'switch',
  /** 模型绑定选择器 */
  modelBind = 'ModelBind',
  /** 可拖拽项 */
  crossSortable = 'CrossSortable',
  /** 日期选择器 */
  datePicker = 'DatePicker',
  /** 单选框 */
  radio = 'Radio',
  /** 标签栏 */
  tabs = 'Tabs',
}

export type VisualEditorProps = {
  type: VisualEditorPropsType;
  /** 表单项标签名称 */
  label: string;
  /** 表单项提示说明 */
  tips?: string;
  /** 表单域标签的位置 */
  labelPosition?: string;
  /** 表单项默认值 */
  defaultValue?: any;
  types?: any;
} & {
  /** 可选项 */
  options?: VisualEditorSelectOptions;
  /** 是否可以多选 */
  multiple?: boolean;
  /** 项属性配置 */
  showItemPropsConfig?: boolean;
} & {
  max?: number;
  min?: number;
} & {
  table?: VisualEditorTableOption;
};

/*---------------------------------------modelBind-------------------------------------------*/
interface EditorModelBindProp {
  label: string;
  defaultValue?: any;
  tips?: string;
}

export function createEditorModelBindProp({
  label = '字段绑定',
  defaultValue,
  tips,
}: EditorModelBindProp): VisualEditorProps {
  return {
    type: VisualEditorPropsType.modelBind,
    label,
    tips,
    defaultValue,
  };
}

/*---------------------------------------switch-------------------------------------------*/
interface EditorSwitchProp {
  label: string;
  defaultValue?: boolean;
  tips?: string;
}

export function createEditorSwitchProp({
  label,
  defaultValue,
  tips,
}: EditorSwitchProp): VisualEditorProps {
  return {
    type: VisualEditorPropsType.switch,
    label,
    tips,
    defaultValue,
  };
}

/*---------------------------------------input-------------------------------------------*/

interface EditorInputProp {
  label: string;
  defaultValue?: any;
  tips?: string;
  types?: any;
}

export function createEditorInputProp({
  label,
  defaultValue,
  tips,
  types,
}: EditorInputProp): VisualEditorProps {
  return {
    type: VisualEditorPropsType.input,
    label,
    tips,
    defaultValue,
    types,
  };
}

/*---------------------------------------datePicker-------------------------------------------*/

interface EditorDatePickerProp {
  label: string;
  defaultValue?: any;
  tips?: string;
  types?: string;
}

export function createEditorDatePickerProp({
  label,
  defaultValue,
  tips,
  types,
}: EditorDatePickerProp): VisualEditorProps {
  return {
    type: VisualEditorPropsType.datePicker,
    label,
    tips,
    defaultValue,
    types,
  };
}
/*---------------------------------------InputNumber -------------------------------------------*/

interface EditorInputNumberProp {
  label: string;
  defaultValue?: any;
  tips?: string;
  max?: number;
  min?: number;
}

export function createEditorInputNumberProp({
  label,
  defaultValue,
  max,
  min,
  tips,
}: EditorInputNumberProp): VisualEditorProps {
  return {
    type: VisualEditorPropsType.inputNumber,
    label,
    tips,
    max,
    min,
    defaultValue,
  };
}

/*---------------------------------------color-------------------------------------------*/

interface EditorColorProp {
  label: string;
  defaultValue?: string;
}

export function createEditorColorProp({ label, defaultValue }: EditorColorProp): VisualEditorProps {
  return {
    type: VisualEditorPropsType.color,
    label,
    defaultValue,
  };
}

/*---------------------------------------select-------------------------------------------*/

export type VisualEditorSelectOptions = {
  label: string;
  value: string | number | boolean | object;
  [prop: string]: any;
}[];

interface EditorSelectProp {
  label: string;
  options: VisualEditorSelectOptions;
  defaultValue?: any;
  multiple?: boolean;
  tips?: string;
}

export function createEditorSelectProp({
  label,
  options,
  defaultValue,
  tips,
  multiple,
}: EditorSelectProp): VisualEditorProps {
  return {
    type: VisualEditorPropsType.select,
    label,
    defaultValue,
    tips,
    options,
    multiple,
  };
}

/*---------------------------------------table-------------------------------------------*/

export type VisualEditorTableOption = {
  options: {
    label: string; // 列显示文本
    field: string; // 列绑定的字段
  }[];
  showKey: string;
};

interface EditorTableProp {
  label: string;
  option: VisualEditorTableOption;
  defaultValue?: { label: string; value: string }[];
}

export function createEditorTableProp({
  label,
  option,
  defaultValue,
}: EditorTableProp): VisualEditorProps {
  return {
    type: VisualEditorPropsType.table,
    label,
    table: option,
    defaultValue,
  };
}

/*---------------------------------------CrossSortableOptions-------------------------------------------*/

interface EditorCrossSortableProp {
  label: string;
  labelPosition: 'top' | '';
  multiple?: boolean;
  showItemPropsConfig?: boolean;
  defaultValue?: string[] | VisualEditorSelectOptions;
}

export function createEditorCrossSortableProp({
  label,
  labelPosition,
  multiple,
  showItemPropsConfig,
  defaultValue,
}: EditorCrossSortableProp): VisualEditorProps {
  return {
    type: VisualEditorPropsType.crossSortable,
    label,
    multiple,
    showItemPropsConfig,
    labelPosition,
    defaultValue,
  };
}
/*---------------------------------------radio-------------------------------------------*/
export type VisualEditorRadioOptions = {
  label: string;
  value: any;
}[];
interface EditorRadioProp {
  label: string;
  defaultValue?: any;
  tips?: string;
  options?: VisualEditorRadioOptions;
}

export function createEditorRadioProp({
  label,
  defaultValue,
  tips,
  options,
}: EditorRadioProp): VisualEditorProps {
  return {
    type: VisualEditorPropsType.radio,
    label,
    tips,
    defaultValue,
    options,
  };
}

/*---------------------------------------tabs-------------------------------------------*/
interface EditorRadioProp {
  label: string;
  defaultValue?: any;
  tips?: string;
}

export function createEditorTabsProp({
  label,
  defaultValue,
  tips,
}: EditorRadioProp): VisualEditorProps {
  return {
    type: VisualEditorPropsType.tabs,
    label,
    tips,
    defaultValue,
  };
}
