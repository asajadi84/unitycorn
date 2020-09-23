/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Layout from '@theme/Layout';

function NotFound() {
  return (
    <Layout title="صفحه یافت نشد">
      <div className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">صفحه یافت نشد</h1>
            <p>صفحه‌ای که آدرس آن را وارد کرده‌اید وجود ندارد.</p>
            <p>
              اگر از درستی آدرس وارد شده اطمینان دارید گزارش خرابی لینک را به ما اطلاع دهید.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
