package com.mini.project._1.ppomodoro;

import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.AutowiredFieldValueResolver;
import org.springframework.beans.factory.support.RegisteredBean;

/**
 * Autowiring for {@link TimeController}.
 */
@Generated
public class TimeController__Autowiring {
  /**
   * Apply the autowiring.
   */
  public static TimeController apply(RegisteredBean registeredBean, TimeController instance) {
    AutowiredFieldValueResolver.forRequiredField("timeRepository").resolveAndSet(registeredBean, instance);
    return instance;
  }
}
