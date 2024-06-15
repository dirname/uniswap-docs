[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / SwapOptions

# 接口: SwapOptions

用于生成发送至路由器的调用参数的选项。

## 目录

### 属性

- [deadline](SwapOptions.md#deadline)
- [fee](SwapOptions.md#fee)
- [inputTokenPermit](SwapOptions.md#inputtokenpermit)
- [recipient](SwapOptions.md#recipient)
- [slippageTolerance](SwapOptions.md#slippagetolerance)
- [sqrtPriceLimitX96](SwapOptions.md#sqrtpricelimitx96)

## 属性

### deadline

• **deadline**: `BigintIsh`

交易过期的时间，以纪元秒为单位。

#### 定义于

[swapRouter.ts:30](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/swapRouter.ts#L30)

___

### fee

• `可选` **fee**: [`FeeOptions`](FeeOptions.md)

在输出上收取费用的可选信息。

#### 定义于

[swapRouter.ts:45](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/swapRouter.ts#L45)

___

### inputTokenPermit

• `可选` **inputTokenPermit**: [`PermitOptions`](../modules.md#permitoptions)

花费输入的可选许可参数。

#### 定义于

[swapRouter.ts:35](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/swapRouter.ts#L35)

___

### recipient

• **recipient**: `string`

应该接收输出的账户。

#### 定义于

[swapRouter.ts:25](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/swapRouter.ts#L25)

___

### slippageTolerance

• **slippageTolerance**: `Percent`

执行价格允许从交易执行价格不利变动的程度。

#### 定义于

[swapRouter.ts:20](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/swapRouter.ts#L20)

___

### sqrtPriceLimitX96

• `可选` **sqrtPriceLimitX96**: `BigintIsh`

交易的可选价格限制。

#### 定义于

[swapRouter.ts:40](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/swapRouter.ts#L40)