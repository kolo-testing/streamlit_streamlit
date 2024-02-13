/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2024)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { FC, memo } from "react"

import { Skeleton as SkeletonProto } from "@streamlit/lib/src/proto"

import { SquareSkeleton } from "./styled-components"

const RawSkeleton: FC<{ element?: SkeletonProto }> = ({ element }) => {
  let css_height, width_pct
  if (element != undefined) {
    css_height =
      element.height != undefined ? element.height + "pt" : undefined
    width_pct =
      element.width != undefined ? element.width * 100 + "%" : undefined
  }
  return (
    <SquareSkeleton
      data-testid="stSkeleton"
      height={css_height}
      width={width_pct}
    />
  )
}

export const Skeleton = memo(RawSkeleton)
